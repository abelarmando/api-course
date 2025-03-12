import express from "express";
import courseRouter from "./routes/course.routes.js";
import authRouter from "./routes/auth.routes.js";
import { PORT } from "./config/env.js";
import verificationRouter from "./routes/verification.routes.js";

const app = express();

app.use(express.json());

app.use("/course", courseRouter);
app.use("/auth", authRouter);
app.use("/verifikasi", verificationRouter);

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
