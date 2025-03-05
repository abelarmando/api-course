import { Router } from "express";
import {
  createCourse,
  deleteCourse,
  getAllCourses,
  getCourseById,
  updatecourse,
} from "../controller/course.controller.js";

const courseRouter = Router();

courseRouter.get("/", getAllCourses);
courseRouter.post("/", createCourse);
courseRouter.get("/:id", getCourseById);
courseRouter.patch("/:id", updatecourse);
courseRouter.delete("/:id", deleteCourse);

export default courseRouter;
