
import React, { useState, useEffect } from "react";
import "../StudentTeacherSubjects.css";
import axios from "axios";
// import UploadForm from "./UploadForm";
import UploadsList from "../UploadsList";
import { BACKEND_URI } from "../../config/constants";


const StudentSubjects = () => {
  const [medias, setMedias] = useState([]);

  useEffect(() => {
    getAllMedias();
  }, []);

  const getAllMedias = () => {
    axios
      .get(`${BACKEND_URI}/api/v1/media/all`)
      .then((result) => {
        setMedias(result.data);
      })
      .catch((error) => {
        setMedias([]);
        console.log(error);
        alert("Error happened!");
      });
  };

  return (
<>
      <div className="card-body">
              <UploadsList medias={medias} />
            </div>
    </>
  );
};
// videoId={medias._id}
export default StudentSubjects;
