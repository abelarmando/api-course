import nodemailer from "nodemailer";
import { SMTP_USER, SMTP_PASSWORD } from "./env.js";

const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 587,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASSWORD,
  },
});

export default transporter;
