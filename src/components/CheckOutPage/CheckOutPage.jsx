import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOutPage = () => {
  const loaderData = useLoaderData();
  const { Name } = loaderData;
  return (
    <div>
      <h2 className="text-center text-primary">
        Congratulation!Yout get access {Name}
      </h2>
    </div>
  );
};

export default CheckOutPage;
