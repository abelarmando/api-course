import transporter from "../config/nodemailjer.js";
import { SENDER_EMAIL } from "../config/env.js";

export const sendVerification = async (nama, token, email) => {
  const mailOptions = {
    from: SENDER_EMAIL,
    to: email,
    subject: "Verification User",
    html: ` <!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verifikasi Email</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
        .button {
            display: inline-block;
            padding: 12px 25px;
            margin-top: 20px;
            font-size: 16px;
            color: #ffffff;
            background-color: #007bff;
            text-decoration: none;
            border-radius: 5px;
        }
        .button:hover {
            background-color: #0056b3;
        }
        .footer {
            margin-top: 20px;
            font-size: 12px;
            color: #777;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Verifikasi Email Anda</h2>
        <p>Terima kasih telah mendaftar! Klik tombol di bawah untuk memverifikasi alamat email Anda.</p>
        <a href="http://localhost:5500/verifikasi/${token}" class="button">Verifikasi Email</a>
        <p class="footer">Jika Anda tidak mendaftar di layanan kami, abaikan email ini.</p>
    </div>
</body>
</html>
 `,
  };

  return transporter.sendMail(mailOptions);
};
