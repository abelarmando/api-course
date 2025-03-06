import { Router } from "express";
import { handleRegistrasi } from "../controller/auth.controller.js";

const authRouter = Router();

authRouter.post("/registrasi", handleRegistrasi);

export default authRouter;
