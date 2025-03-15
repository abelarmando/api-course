import { sendVerification } from "../mailer/sendverification.js";
import { updateUserToken } from "../models/verification.models.js";
import { encryptToken } from "./encryptedtoken.js";

export const repeatverification = async (token, user) => {
  try {
    console.log("user", user);
    const newtoken = encryptToken(user.email);
    await updateUserToken(token, newtoken);
    const mailer = await sendVerification(user.nama, newtoken, user.email);
    console.log(mailer.response);
    return {
      status: 401,
      message:
        "kode verifikasi sudah melewati masa tenggat, mohon dicek email kembali",
    };
  } catch (error) {
    return { status: 500, message: error.message };
  }
};
