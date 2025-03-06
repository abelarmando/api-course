import express from "express";
import courseRouter from "./routes/course.routes.js";
import authRouter from "./routes/auth.routes.js";
import { PORT } from "./config/env.js";

const app = express();

app.use(express.json());

app.use("/course", courseRouter);
app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
