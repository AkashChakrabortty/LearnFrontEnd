import React from "react";

const Card = (props) => {
  const { Name, description, img, price } = props.value;
  return (
    <div>
      <div className="card text-center">
        <div className="text-center">
          <img
            src={img}
            className="card-img-top img-fluid"
            alt={Name}
            style={{ height: 150, width: 150 }}
          />
        </div>
        <div className="card-body text-primary">
          <h5 className="card-title">{Name}</h5>
          <span>price:{price}</span>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
