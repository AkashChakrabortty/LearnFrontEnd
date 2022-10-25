import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const Course = () => {
  const loaderData = useLoaderData();
  return (
    <div className="container d-flex">
      <div className="left-side col-6">
        {loaderData.map((element) => {
          return (
            <div className="my-2" key={element.id}>
              <Link to={`/course/${element.id}`}>
                <button className="btn btn-outline-primary">
                  {element.Name}
                </button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="right-side col-6">
        <div>
          {loaderData.map((element) => {
            return <Card value={element} key={element.id}></Card>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Course;
