import { Router } from "express";
import upload from "../middleware/multer.middleware.js";
import { handleupload } from "../controller/uploud.controller.js";

const uploadRouter = Router();

uploadRouter.post("/", upload.single("image"), handleupload);

export default uploadRouter;
