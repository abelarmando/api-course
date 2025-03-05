import {
  createCoursedb,
  deleteCoursedb,
  getAllCoursesdb,
  getCourseByIddb,
  updateCoursedb,
} from "../models/course.models.js";

export const getAllCourses = async (req, res) => {
  try {
    const [courses] = await getAllCoursesdb();
    res.status(200).json({ success: true, data: courses });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCourseById = async (req, res) => {
  const { id } = req.params;

  try {
    const [course] = await getCourseByIddb(id);
    res.status(200).json({ success: true, data: course });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createCourse = async (req, res) => {
  const { judul, deskripsi, harga } = req.body;

  try {
    await createCoursedb(judul, deskripsi, harga);
    res.status(200).json({
      success: true,
      data: { judul: judul, deskripsi: deskripsi, harga: harga },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatecourse = async (req, res) => {
  const { id } = req.params;
  const { judul, deskripsi, harga } = req.body;
  try {
    await updateCoursedb(id, judul, deskripsi, harga);
    res.status(200).json({
      success: true,
      data: { judul: judul, deskripsi: deskripsi, harga: harga },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteCourse = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteCoursedb(id);
    res.status(200).json({ success: true, message: "Course deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
