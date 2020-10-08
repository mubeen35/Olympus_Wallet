import React from "react";
import { Link, Route } from "react-router-dom";
import Technology from "./technlogy";
import "./css/utilities.css";

const Governance = () => {
  return (
    <div className="container-fluid shadow contain">
      <div className="row justify-content-center  text-center">
        <div className="col-auto m-act">
          <Link to={"/Governance/Technology"} className="mx-sm-3 a">
            <h5 className="h5 text-light f1"> Technology</h5>
          </Link>
        </div>
        <div className="col-auto mx-sm-4 m-act">
          <Link to={"/Governance/Technology"} className="mx-sm-3 a">
            <h5 className="h5 text-light f1"> Business</h5>
          </Link>
        </div>
        <div className="col-auto mx-sm-4 m-act">
          <Link to={"/Governance/Technology"} className="mx-sm-3 a">
            <h5 className="h5 text-light f1"> Adoption</h5>
          </Link>
        </div>
        <div className="col-auto mx-sm-4 m-act">
          <Link to={"/Governance/Technology"} className="mx-sm-3 a">
            <h5 className="h5 text-light f1"> Community</h5>
          </Link>
        </div>
        <div className=" col-auto mx-sm-4 m-act">
          <Link to={"/Governance/Technology"} className="mx-sm-3 a">
            <h5 className="h5 text-light f1">Marketing</h5>
          </Link>
        </div>
      </div>
      <div className="row">
        <Route path={"/Governance/Technology"}>
          <Technology />
        </Route>
      </div>
    </div>
  );
};

export default Governance;
