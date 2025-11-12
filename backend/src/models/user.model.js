import mongoose from "mongoose";

const integrationSchema = new mongoose.Schema({
  app: {
    type: String,
    required: true,
  },
  accessToken: {
    type: String,
  },
  refreshToken: {
    type: String,
  },
});

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please enter your name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
      minlength: [6, "Password must be at least 6 characters"],
      select: false, // don’t return password by default
    },

    apiKey: {
      type: String,
      unique: true,
    },

    integrations: [integrationSchema],

    workflows: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "workflow",
      },
    ],

    verificationCode: {
      type: Number,
    },
    verificationCodeExpiry: {
      type: Date,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("user", userSchema);

export default userModel;
