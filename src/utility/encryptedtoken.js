import crypto from "crypto";
import { CRYPTO_KEY } from "../config/env.js";

export const encryptToken = (no_handphone) => {
  return crypto
    .createHmac("sha256", CRYPTO_KEY)
    .update(no_handphone)
    .digest("hex");
};
