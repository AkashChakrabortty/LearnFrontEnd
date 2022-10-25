import jsPDF from "jspdf";
import React from "react";
import { useLoaderData } from "react-router-dom";
const CourseDetails = () => {
  const loaderData = useLoaderData();
  const { Name, description, img } = loaderData;

  const handleDownload = () => {
    let doc = new jsPDF("landscape", "px", "a4", "false");
    doc.text(60, 60, Name);
    doc.text(60, 80, description);
    doc.save("courseDetails.pdf");
  };
  return (
    <div className="col-6 mx-auto text-center text-primary fs-3 border mt-5">
      <div className="d-flex justify-content-around mt-2">
        <button onClick={handleDownload}>
          <i className="fa-solid fa-file-pdf text-primary"></i>
        </button>
        <h2>{Name}</h2>
      </div>
      <img src={img} alt={Name} />
      <p>{description}</p>
      <button type="button" className="btn btn-outline-primary">
        Get premium access
      </button>
    </div>
  );
};

export default CourseDetails;
