import jwt from "jsonwebtoken";
import { REFRESH_TOKEN_SECRET } from "../mailer/config/env.js";
import { handleLogout } from "./auth.controller.js";

export const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.status(401);
  const refreshToken = cookies.jwt;
  console.log(cookies);
  jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err) return handleLogout();
    const accessToken = jwt.sign(
      { email: decoded.email, id_user: decoded.id_user },
      ACCESS_TOKEN_SECRET,
      { expiresIn: ACCESS_TOKEN_EXPIRE }
    );
    res.status(200).json({ accessToken: accessToken, email: decoded.email });
  });
};
