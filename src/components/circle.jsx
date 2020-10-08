import React from "react";
import "./css/utilities.css";

const Circle = ({ props }) => {
  if (props === "starting") {
    return <div className="circle float-right m-2 bg-warning border-0"></div>;
  }
  if (props === "active") {
    return <div className="circle float-right m-2 bg-info border-0"></div>;
  }
  if (props === "error") {
    return <div className="circle float-right bg-danger m-2  border-0"></div>;
  } else return null;
};
export default Circle;
