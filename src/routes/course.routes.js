import { Router } from "express";
import {
  createCourse,
  deleteCourse,
  getAllCourses,
  getCourseById,
  updatecourse,
} from "../controller/course.controller.js";
import { verifyJWT } from "../middleware/verivyJWT.middleware.js";

const courseRouter = Router();

courseRouter.get("/", getAllCourses);
courseRouter.post("/", verifyJWT, createCourse);
courseRouter.get("/:id", getCourseById);
courseRouter.patch("/:id", verifyJWT, updatecourse);
courseRouter.delete("/:id", verifyJWT, deleteCourse);

export default courseRouter;
