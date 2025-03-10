import { Router } from "express";
import {
  handleLogin,
  handleRegistrasi,
} from "../controller/auth.controller.js";

const authRouter = Router();

authRouter.post("/registrasi", handleRegistrasi);
authRouter.post("/login", handleLogin);

export default authRouter;
