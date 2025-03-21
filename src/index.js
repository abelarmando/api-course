import { PORT } from "./config/env.js";
import express from "express";
import courseRouter from "./routes/course.routes.js";
import authRouter from "./routes/auth.routes.js";
import verificationRouter from "./routes/verification.routes.js";
import { errorhandling } from "./middleware/error.middleware.js";
import uploadRouter from "./routes/uploud.routes.js";
import cookieParser from "cookie-parser";
import refreshtokenRouter from "./routes/refreshtoken.routes.js";
const app = express();

app.use(express.json());
app.use("/avatars", express.static("public/img"));
app.use(cookieParser());

app.use("/course", courseRouter);
app.use("/auth", authRouter);
app.use("/verify-email", verificationRouter);
app.use("/refreshtoken", refreshtokenRouter);
app.use("/uploud", uploadRouter);

app.use(errorhandling);

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
