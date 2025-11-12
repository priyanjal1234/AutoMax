import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import generateVerificationCode from "../utils/generateVerificationCode.js";
import sendMail from "../utils/sendMail.js";

export const registerUser = async function (req, res) {
  try {
    let { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res
        .status(400)
        .json({ message: "Name, Email and Password are required" });
    }

    let user = await userModel.findOne({ email });

    if (user) {
      return res.status(409).json({ message: "You are already registered" });
    }

    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(password, salt);
    let verificationCode = generateVerificationCode();
    user = await userModel.create({
      fullName,
      email,
      password: hash,
      verificationCode,
      verificationCodeExpiry: Date.now() + 10 * 60 * 1000,
    });
    await sendMail(email, verificationCode);
    return res
      .status(201)
      .json({ message: "Please check your email for the verification code" });
  } catch (error) {
    return res.status(500).json({
      message:
        error instanceof Error
          ? error.message
          : `Error in registering the user: ${error}`,
    });
  }
};

export const verifyEmail = async function (req, res) {
  try {
    let { email, code } = req.body;

    if (!email || !code) {
      return res
        .status(400)
        .json({ message: "Email and Verification Code are required" });
    }

    let user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (
      user.verificationCode !== code ||
      user.verificationCodeExpiry < Date.now()
    ) {
      return res.status(401).json({ message: "Invalid or Expired code" });
    }

    let token = jwt.sign(
      { fullName: user.fullName, email },
      process.env.JWT_KEY
    );
    res.cookie("token", token);
    user.isVerified = true;
    user.verificationCode = undefined;
    user.verificationCodeExpiry = undefined;

    await user.save();

    return res.status(200).json({ message: "Email Verified Successfully" });
  } catch (error) {
    return res.status(500).json({
      message:
        error instanceof Error
          ? error.message
          : `Error verifying email: ${error}`,
    });
  }
};
