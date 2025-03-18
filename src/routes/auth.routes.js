import { Router } from "express";
import {
  handleLogin,
  handleRegistrasi,
  handleLogout,
} from "../controller/auth.controller.js";

const authRouter = Router();

authRouter.post("/register", handleRegistrasi);
authRouter.post("/login", handleLogin);
authRouter.post("/logout", handleLogout);

export default authRouter;
