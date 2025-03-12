import { Router } from "express";
import { verification } from "../controller/verification.controller.js";

const verificationRouter = Router();

verificationRouter.get("/:token", verification);

export default verificationRouter;
