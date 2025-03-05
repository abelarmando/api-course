import { config } from "dotenv";
import fs from "fs";

const envFile = fs.existsSync("./.env") ? "./.env" : "./.env.example";

config({
  path: envFile,
});

export const { PORT, DB_HOST, DB_USER, DB_DATABASE, DB_PASSWORD } = process.env;
