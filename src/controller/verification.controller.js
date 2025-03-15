import {
  getUserbyToken,
  updateUserToken,
  updateVerifiedUser,
} from "../models/verification.models.js";
// import { encryptToken } from "../utility/encryptedtoken.js";
// import { sendVerification } from "../mailer/sendverification.js";
import { repeatverification } from "../utility/repeatverification.js";

export const verification = async (req, res) => {
  const { token } = req.params;
  try {
    const [user] = await getUserbyToken(token);
    if (user.length == 0) {
      return res.status(200).json({ message: "user sudah terverifikasi" });
    }
    const expire_date = new Date(user[0].expire_at).getTime();
    const now_date = new Date().getTime();

    if (expire_date < now_date) {
      const response = await repeatverification(token, user[0]);

      return res.status(response.status).json({ message: response.message });
    }

    await updateVerifiedUser(user[0].email);
    res.status(200).json({ message: "user sudah terferifikasi" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
