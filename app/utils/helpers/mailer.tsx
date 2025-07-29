import nodemailer from "nodemailer";

const sendMail = async (to: any, subject: any, text: any) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.NODEMAILER_HOST,
      port: process.env.NODEMAILER_PORT,
      secure: true,
      auth: {
        user: "hashirk966@gmail.com",
        pass: process.env.NODEMAILER_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: "Dev With Rafay <hashirk966@gmail.com>",
      to,
      subject,
      text,
    });
  } catch (err) {
    throw err;
  }
};

export { sendMail };
