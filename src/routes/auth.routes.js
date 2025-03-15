import { Router } from "express";
import {
  handleLogin,
  handleRegistrasi,
  handleLogout,
} from "../controller/auth.controller.js";

const authRouter = Router();

authRouter.post("/registrasi", handleRegistrasi);
authRouter.post("/login", handleLogin);
authRouter.post("/logout", handleLogout);

export default authRouter;
