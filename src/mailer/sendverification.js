import transporter from "../config/nodemailjer.js";
import { SENDER_EMAIL } from "../config/env.js";

export const sendVerification = async (nama, no_handphone, email) => {
  const mailOptions = {
    from: SENDER_EMAIL,
    to: "rifa08942@gamil.com",
    subject: "Registrasi Berhasil",
    text: `selamat datang di greatestack dengan nama ${nama} dan no handphone ${no_handphone} dan email ${email}`,
  };

  return transporter.sendMail(mailOptions);
};
