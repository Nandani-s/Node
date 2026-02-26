import multer from "multer"; // image handle krne k liye multer use krte hai, ye ek middleware hai jo multipart/form-data ko handle krta hai, jo ki file upload ke liye use hota hai.

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/users");
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});

export const upload = multer({
  storage,
});