import express from "express";
import cors from "cors";
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).single("avatar");

const app = express();

app.use(cors());

app.post("/profile", function (req, res) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      console.error(error);
      res.status(500).send("A aparut o eroare");
    } else if (err) {
      console.error(error);
      res.status(500).send("A aparut o eroare");
    }

    res.status(303).send("Fisierul a fost incarcat");
    console.dir(req.file);
  });
});

console.log("Listening on port 3000...");
app.listen(3000);
