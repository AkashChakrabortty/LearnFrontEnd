import jsPDF from "jspdf";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
const CourseDetails = () => {
  const loaderData = useLoaderData();
  const { Name, description, img, id } = loaderData;

  const handleDownload = () => {
    let doc = new jsPDF("landscape", "px", "a4", "false");
    doc.text(60, 60, Name);
    doc.text(60, 80, description);
    doc.save("courseDetails.pdf");
  };

  const handleAccess = () => {};
  return (
    <div className="col-6 mx-auto text-center text-primary fs-3 border mt-5">
      <div className="d-flex justify-content-around mt-2">
        <button onClick={handleDownload}>
          <i className="fa-solid fa-file-pdf text-primary"></i>
        </button>
        <h2>{Name}</h2>
      </div>
      <img src={img} alt={Name} style={{ height: 150, width: 150 }} />
      <p>{description}</p>
      <Link to={`/checkoutPage/${id}`}>
        <button type="button" className="btn btn-outline-primary">
          Get premium access
        </button>
      </Link>
    </div>
  );
};

export default CourseDetails;
