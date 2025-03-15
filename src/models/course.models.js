import dbpool from "../mailer/config/database.js";

export const getAllCoursesdb = () => {
  const rows = dbpool.query("SELECT * FROM course");
  return rows;
};

export const getCourseByIddb = (id) => {
  const course = dbpool.query(`SELECT * FROM course WHERE id_course = ${id} `);
  return course;
};

export const createCoursedb = (judul, deskripsi, harga) => {
  const course = dbpool.query(`INSERT INTO course 
    (judul, deskripsi, harga) 
    VALUES ("${judul}", "${deskripsi}", ${harga})`);
  return course;
};

export const updateCoursedb = (id, judul, deskripsi, harga) => {
  const updatecourse = dbpool.query(
    `UPDATE course SET judul = "${judul}", deskripsi = "${deskripsi}", harga = ${harga} WHERE id_course = ${id}`
  );
  return updatecourse;
};

export const deleteCoursedb = (id) => {
  const deletecourse = dbpool.query(
    `DELETE FROM course WHERE id_course = ${id}`
  );
  return deletecourse;
};
