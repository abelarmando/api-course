import express from "express";
import courseRouter from "./routes/course.routes.js";
import { PORT } from "./config/env.js";

const app = express();

app.use(express.json());

app.use("/course", courseRouter);

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
