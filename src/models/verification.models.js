import dbpool from "../mailer/config/database.js";

export const getUserbyToken = (token) => {
  const user = dbpool.query(`SELECT * FROM users WHERE token = "${token}" `);
  return user;
};

export const updateUserToken = (oldtoken, newtoken) => {
  const updatetoken = dbpool.query(
    `UPDATE users SET token = "${newtoken}", expire_at = now() + interval 2 hour WHERE token = "${oldtoken}"`
  );
  return updatetoken;
};

export const updateVerifiedUser = (email) => {
  const verifieduser = dbpool.query(
    `UPDATE users SET token = null, expire_at = null WHERE email = "${email}"`
  );
  return verifieduser;
};
