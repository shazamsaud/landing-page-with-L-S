const express = require("express");
const mediaController = require("../controllers/mediaController");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const Media = require("../Models/Media");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync("public")) {
      fs.mkdirSync("public");
    }

    if (!fs.existsSync("public/videos")) {
      fs.mkdirSync("public/videos");
    }

    cb(null, "public/videos");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    var ext = path.extname(file.originalname);

    if (ext !== ".mkv" && ext !== ".mp4") {
      return cb(new Error("Only videos are allowed!"));
    }

    cb(null, true);
  },
});

const router = express.Router();

//get all media
router.get("/all", mediaController.getAll);

//post create new media
router.post(
  "/create",
  upload.fields([
    {
      name: "videos",
      maxCount: 5,
    },
  ]),
  mediaController.create
);


// router.delete('/:id', async (req, res) => {
//   try {
//     const media = await Media.findById(req.params.id);

//     if (!media) {
//       return res.status(404).json({ message: 'Video not found' });
//     }

//     // Delete the file from the server
//     const filePath = path.join(__dirname, '../public/videos', media.filename);

//     fs.unlinkSync(filePath);

//     // Remove the video record from the database
//     await media.remove();

//     res.json({ message: 'Video deleted successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });


router.delete('/:id', async (req,res) => {
  const id = req.params.id;
  try {
  
    // Find the video by ID in the database
    const video = await Media.findById(id);
    // alert(`${id} deleted`)
   
    if (!video) {
      throw new Error('Video not found');
    }

    // Delete the video from the database
    await video.remove();

    // You might also want to delete the video file from your storage (e.g., local disk or cloud storage)

    return { success: true, message: 'Video deleted successfully' };
  } 
  catch (error) {
    console.error(error);
    return { success: false, message: 'Error deleting video' };
  }
});
// router.delete('/:id', async (req, res) => {
//   try {
//     const media = await Media.findById(req.params.id);

//     if (!media) {
//       return res.status(404).json({ message: 'Video not found' });
//     }

//     // Delete the file from the server
//     const filePath = path.join(__dirname, '../public/videos', media.filename);

//     fs.unlinkSync(filePath);

//     // Remove the video record from the database
//     await media.remove();

//     res.json({ message: 'Video deleted successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

module.exports = router;
