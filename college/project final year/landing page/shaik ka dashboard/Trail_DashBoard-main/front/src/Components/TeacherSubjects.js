
import React, { useState, useEffect } from "react";
import "./StudentTeacherSubjects";
import axios from "axios";
import UploadForm from "./UploadForm";
import UploadsList from "./UploadsList";
import { BACKEND_URI } from "../config/constants";


const TeacherSubjects = () => {
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
      <div className="row">
        <div className="col-md-6">
          <div
            className="card"
            style={{
              height: "auto",
              width: "800px",
              margin: "40px",
              border: "1px solid black",
            }}
          >
            <div className="card-body">
              <UploadForm getAllMedias={getAllMedias} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className="card"
            style={{
              height: "auto",
              width: "800px",
              margin: "40px",
              border: "1px solid black",
            }}
          >
            
          </div>
        </div>
      </div>
      <div className="card-body">
              <UploadsList medias={medias} />
            </div>
    </>
  );
};
// videoId={medias._id}
export default TeacherSubjects;
