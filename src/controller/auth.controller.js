import {
  ACCESS_TOKEN_EXPIRE,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
  REFRESH_TOKEN_EXPIRE,
} from "../config/env.js";
import { createNewUserdb, getUserdb } from "../models/auth.models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { v6 as uuidv6 } from "uuid";
import { sendVerification } from "../utility/mailer/sendverification.js";
import { encryptToken } from "../utility/encryptedtoken.js";
import { repeatverification } from "../utility/repeatverification.js";

export const handleRegistrasi = async (req, res) => {
  const { nama, no_handphone, email, password } = req.body;

  try {
    const [existuser] = await getUserdb(email);

    if (existuser.length > 0) {
      if (existuser[0].token !== null) {
        const response = await repeatverification(
          existuser[0].token,
          existuser[0]
        );
        return res.status(response.status).json({
          message: "email sudah terdaftar, verifikasi sudah terkirim kembali",
        });
      } else {
        return res.status(400).json({ message: "user already exist" });
      }
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    const uuid = uuidv6();
    await createNewUserdb(nama, no_handphone, email, passwordHash, uuid);
    let info = await sendVerification(nama, uuid, email);
    console.log(info.response);

    res.status(200).json({
      success: true,
      message: "user created",
      data: {
        nama: nama,
        no_handphone: no_handphone,
        email: email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const handleLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [user] = await getUserdb(email);
    if (user.length == 0) {
      return res.status(404).json({ message: "user not found" });
    }

    if (user[0].token !== null) {
      const response = await repeatverification(user[0].token, user[0]);
      return res.status(response.status).json({ message: response.message });
    }
    const isValidPassword = await bcrypt.compare(
      password,
      user[0].hash_password
    );
    if (!isValidPassword) {
      return res.status(401).json({ message: "invalid password" });
    }

    const accessToken = jwt.sign(
      {
        id_user: user[0].id_user,
        email: user[0].email,
      },
      ACCESS_TOKEN_SECRET,
      { expiresIn: ACCESS_TOKEN_EXPIRE }
    );

    const refreshToken = jwt.sign(
      {
        id_user: user[0].id_user,
        email: user[0].email,
      },
      REFRESH_TOKEN_SECRET,
      { expiresIn: REFRESH_TOKEN_EXPIRE }
    );

    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.status(200).json({
      success: true,
      message: "login success",
      data: {
        Token: accessToken,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const handleLogout = (req, res) => {
  res.clearCookie("jwt", { httpOnly: true, secure: true, sameSite: "none" });
  res.status(200).json({ success: true, message: "logout success" });
};
