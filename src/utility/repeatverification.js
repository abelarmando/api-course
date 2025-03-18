import { sendVerification } from "./mailer/sendverification.js";
import { updateUserToken } from "../models/verification.models.js";
import { v6 as uuidv6 } from "uuid";

export const repeatverification = async (token, user) => {
  try {
    const newtoken = uuidv6();
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
