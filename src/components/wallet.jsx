import React from "react";
import { Link, Route } from "react-router-dom";
import TransHistory from "./transHistory";
import Send from "./send";
import Receive from "./receive";
import "./css/utilities.css";

const Wallet = () => {
  return (
    <div className="container-fluid shadow contain m-sm-0">
      <div className="row justify-content-center text-center">
        <div className="col-sm-4 col-auto  my-2 m-sm-0 " tabIndex="1">
          <Link to={"/Wallet/TX-History"} className=" mx-sm-3 ">
            <h3 className="h3 text-light f-size"> Transaction History</h3>
          </Link>
        </div>
        <div className="col-sm-4 col-auto my-2 m-sm-0 ">
          <Link to={"/Wallet/Send"} className="mx-sm-3  ">
            <h3 className="h3 text-light f-size"> Send</h3>
          </Link>
        </div>
        <div className="col-sm-4 col-auto my-2 m-sm-0 ">
          <Link to={"/Wallet/Receive"} className="mx-sm-3  ">
            <h3 className="h3 text-light f-size ">Receive</h3>
          </Link>
        </div>
      </div>
      <div className="row">
        <Route path={"/Wallet/TX-History"}>
          <TransHistory />
        </Route>
        <Route path={"/Wallet/Send"}>
          <Send />
        </Route>
        <Route path={"/Wallet/Receive"}>
          <Receive />
        </Route>
      </div>
    </div>
  );
};
export default Wallet;
