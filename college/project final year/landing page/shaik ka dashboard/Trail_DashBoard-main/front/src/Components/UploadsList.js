import React from "react";
import "./StudentTeacherSubjects.css";
import { BACKEND_URI } from "../config/constants";
import {   Card,CardContent,Box, Typography } from '@mui/material'
import axios from "axios";

  const UploadsList = ({ medias }) => {
    // const [videos, setVideos] = useState([]);

  
  
    const handleDelete = async (id) => {
      try {
        // Send a DELETE request to delete the video by ID
        alert(id);
        await axios.delete(`http://localhost:4000/api/v1/media/${id}`);
       
        // Update the local state to reflect the deletion
        // setVideos(videos.filter(video => video._id !== id));
      } catch (error) {
        alert(error);
      }
    };


  return (
    <div >
        <Box width={"100%"}  margin={"auto"} marginTop={4}>
      <Typography margin={"auto"}  marginTop={5} varient="h4" padding={2} textAlign={"center"} width={"40%"} bgcolor={"#900C3F"} color={"white"}>All videos</Typography>
      </Box>
      <Box 
      width={"120%"} 
    
      marginTop={5}
      // margin={"auto"}
    
       
      display={"flex"} justifyContent={"flex-start"} flexWrap={"wrap"}
      >
              {medias &&
        medias.map((media) => {
          return (
            <Card
            sx={{
              margin: 3,
              width: 500,
              height: 450,
              borderRadius: 5,
              ":hover": {
                boxShadow: "10px 10px 20px #ccc",
              },
            }}
          >
  
            <CardContent>
            {media.videos.map((video) => {
                  return (
                    <video
                      preload="auto"
                      width="100%"
                      height="320"
                      controls
                    >
                      <source src={`${BACKEND_URI}${video}`} />
                      ;Your browser does not support the video tag.
                    </video>
                  );
                })}
              <Typography gutterBottom variant="h5" component="div" >
                {media.name}
              </Typography>
              <button type="button" onClick={() => handleDelete(media._id)} class="btn btn-danger">Delete</button>
           
            </CardContent>
    
          </Card>
          );
        })}

      </Box>

    </div>
  );
};


export default UploadsList;

