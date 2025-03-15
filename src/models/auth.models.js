import dbpool from "../config/database.js";

export const createNewUserdb = (nama, no_handphone, email, password, token) => {
  const user = dbpool.query(
    `INSERT INTO users (nama, no_handphone, hash_password, email, token, expire_at ) VALUES ("${nama}", ${no_handphone},  "${password}","${email}", "${token}", now() + interval 2 hour )`
  );
  return user;
};

export const getUserdb = (email) => {
  const user = dbpool.query(`SELECT * FROM users WHERE email = "${email}" `);
  return user;
};
