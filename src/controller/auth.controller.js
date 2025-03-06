import { createNewUserdb, getUserdb } from "../models/auth.models.js";
import bcrypt from "bcrypt";

export const handleRegistrasi = async (req, res) => {
  const { nama, no_handphone, email, password } = req.body;
  if (!nama || !no_handphone || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const [existuser] = await getUserdb(email);
    if (existuser.length > 0) {
      return res.status(400).json({ message: "user already exist" });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    await createNewUserdb(nama, no_handphone, email, passwordHash);

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
