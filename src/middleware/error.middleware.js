import multer from "multer";

export const errorhandling = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({
      message: "file to large goblok sia",
    });
  }

  return res.status(500).json({
    message: err.message,
  });
};
