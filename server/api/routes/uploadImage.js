const express = require("express");
const app = express.Router();
const { User, Admin } = require("../../db");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    return cb("Estensione del file invalida.", false);
  }
};

const upload = multer({
  storage,
  fileFilter: imageFilter,
  limits: 1024 * 5,
}).single("image");

/**
 * @path /api/postAvatar/:id
 */

app.post("/:id", async (req, res) => {
  upload(req, res, async (err) => {
    try {
      if (err instanceof multer.MulterError) {
        return res
          .status(400)
          .json({ message: "Errore nel caricamento dell'immagine." });
      } else if (err) {
        return res.status(500).json({ message: err });
      }

      const { id } = req.params;
      const image = req.file?.path;

      const user = await User.findById({ _id: id });

      const admin = await Admin.findById({ _id: id });

      let document = user || admin;

      if (document) {
        document.proPic = image;

        await document.save();

        return res.status(201).json({ image: document.proPic });
      }
    } catch (error) {
      return res.status(500).json({ message: "Il file non è un immagine." });
    }
  });
});

module.exports = app;
