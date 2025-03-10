import dbpool from "../config/database.js";
const date = new Date().toLocaleDateString("en-CA");

export const createNewUserdb = (nama, no_handphone, email, password) => {
  const user = dbpool.query(
    `INSERT INTO users (nama, no_handphone, hash_password, email, tanggal_pembuatan, tanggal_update) VALUES ("${nama}", ${no_handphone},  "${password}","${email}", "${date}", "${date}")`
  );
  return user;
};

export const getUserdb = (email) => {
  const user = dbpool.query(`SELECT * FROM users WHERE email = "${email}" `);
  return user;
};
