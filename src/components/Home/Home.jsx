import React from "react";

const Home = () => {
  return (
    <div className="container d-md-flex align-items-center gap-2">
      <div className="left">
        <img
          src="https://media.istockphoto.com/photos/programmer-working-with-program-code-picture-id1075599562?k=20&m=1075599562&s=612x612&w=0&h=cDFY2kKyhFzSNNlDQsaxoekIW0v7iyaMBkxp11Fz33U="
          alt="coding"
          className="img-fluid"
        />
      </div>
      <div className="right">
        <h2 className="text-primary text-center">
          Learn front end development
        </h2>
      </div>
    </div>
  );
};

export default Home;
