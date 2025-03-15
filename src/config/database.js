import mysql from "mysql2";
import { DB_HOST, DB_USER, DB_DATABASE, DB_PASSWORD } from "./env.js";

const dbpool = mysql
  .createPool({
    host: DB_HOST,
    user: DB_USER,
    database: DB_DATABASE,
    password: DB_PASSWORD,
  })
  .promise();

export default dbpool;
