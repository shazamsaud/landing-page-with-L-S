const Media = require("../Models/Media");

exports.getAll = async (req, res) => {
  try {
    const media = await Media.find();

    res.json(media);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
// Backendurl/public/videos/file_name.mp4
exports.create = async (req, res) => {
  const { name } = req.body;
  let videosPaths = [];

  if (Array.isArray(req.files.videos) && req.files.videos.length > 0) {
    for (let video of req.files.videos) {
      videosPaths.push("/" + video.path);
    }
  }

  try {
    const createdMedia = await Media.create({
      name,
      videos: videosPaths,
    });

    res.json({ message: "Media created successfully", createdMedia });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};



// exports.deleteVideo = async (req,res) => {
//   const videoId = req.params.id;
//   try {
//     // Find the video by ID in the database
//     const video = await Media.findById(videoId);

//     if (!video) {
//       throw new Error('Video not found');s
//     }

//     // Delete the video from the database
//     await video.remove();

//     // You might also want to delete the video file from your storage (e.g., local disk or cloud storage)

//     return { success: true, message: 'Video deleted successfully' };
//   } catch (error) {
//     console.error(error);
//     return { success: false, message: 'Error deleting video' };
//   }
// }
