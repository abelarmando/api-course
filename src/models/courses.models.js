import dbpool from "../config/database.js";

export const getAllCoursesdb = () => {
  const rows = dbpool.query("SELECT * FROM courses");
  return rows;
};

export const getCourseByIddb = (id) => {
  const course = dbpool.query(`SELECT * FROM courses WHERE id_course = ${id} `);
  return course;
};

export const createCoursedb = (judul, deskripsi, harga) => {
  const course = dbpool.query(`INSERT INTO courses 
    (judul, deskripsi, harga) 
    VALUES ("${judul}", "${deskripsi}", ${harga})`);
  return course;
};

export const updateCoursedb = (id, judul, deskripsi, harga) => {
  const updatecourse = dbpool.query(
    `UPDATE courses SET judul = "${judul}", deskripsi = "${deskripsi}", harga = ${harga} WHERE id_course = ${id}`
  );
  return updatecourse;
};

export const deleteCoursedb = (id) => {
  const deletecourse = dbpool.query(
    `DELETE FROM courses WHERE id_course = ${id}`
  );
  return deletecourse;
};

export const topicCoursedb = (topic) => {
  const topiccourse = dbpool.query(
    `SELECT * FROM courses WHERE judul LIKE '%${topic}%' OR deskripsi LIKE '${topic}';`
  );
  return topiccourse;
};

export const sortbyCoursedb = (sortby) => {
  const sortbycourse = dbpool.query(
    `SELECT * FROM courses ORDER BY harga ${sortby}`
  );
  return sortbycourse;
};

export const searchCoursedb = (search) => {
  const searchcourse = dbpool.query(
    `SELECT * FROM courses WHERE judul LIKE '%${search}%' `
  );
  return searchcourse;
};
