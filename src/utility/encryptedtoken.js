import crypto from "crypto";
import { CRYPTO_KEY } from "../config/env.js";

export const encryptToken = (email) => {
  return crypto.createHmac("sha256", CRYPTO_KEY).update(email).digest("hex");
};
