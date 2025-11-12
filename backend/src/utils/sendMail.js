import nodemailer from "nodemailer";

async function sendMail(email, code) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "priyanjal362@gmail.com",
        pass: "bxca oabg duyz mpxb",
      },
    });

    const mailOptions = {
      from: "priyanjal362gmail.com",
      to: email,
      subject: "Verification Code for continuing to AutoMax",
      text: `Your Verification Code is: ${code}`,
    };

    let result = await transporter.sendMail(mailOptions);
    console.log(result.response);

    return true;
  } catch (error) {
    console.log(
      `Error sending mail: ${error instanceof Error ? error.message : error}`
    );
    return false;
  }
}

export default sendMail;
