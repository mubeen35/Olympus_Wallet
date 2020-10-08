import React, { useState } from "react";
import "./css/sidebar.css";
import "./css/utilities.css";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import Cont from "./dasContent";
import "antd/dist/antd.css";
import Wallet from "./wallet";
import Settings from "./settings";
import Network from "./network";
import Governance from "./governance";
import { Route } from "react-router-dom";

const Dashboard = () => {
  const [head, setHead] = useState("Dashboard");
  console.log(head);

  const setdash = () => {
    setHead("Dashboard");
  };
  const setWallet = () => {
    setHead("Wallet");
  };
  const setG = () => {
    setHead("Govarnance");
  };
  const setSettings = () => {
    setHead("Settings");
  };
  const setNet = () => {
    setHead("Network");
  };
  const sidebarToggle = () => {
    let x = document.getElementById("sidebar-wrapper");
    if (x.style.display === "none") {
      x.style.display = "block";
      x.style.height = "auto";
    } else {
      x.style.display = "none";
    }
  };
  return (
    <div className={"d-flex "} id={"wrapper"}>
      <Sidebar
        setDash={setdash}
        wa={setWallet}
        gov={setG}
        set={setSettings}
        net={setNet}
      />

      <div id={"page-content-wrapper"}>
        <Navbar toggle={sidebarToggle} head={head} />
        <div className="px-sm-4 pb-sm-3 pt-sm-3 ">
          <Route exact path="/">
            <Cont />
          </Route>
          <Route path="/Wallet">
            <Wallet />
          </Route>
          <Route path="/Governance/Technology">
            <Governance />
          </Route>
          <Route path="/Settings">
            <Settings />
          </Route>
          <Route path="/Network">
            <Network />
          </Route>
        </div>
        <div className="container-fluid footer">
          <div
            className="row"
            style={{ width: "100", backgroundColor: "#5c6bc0" }}
          >
            <div className="col-sm-10 col-auto m-sm-0 mr-auto">
              <small className="text-light"> Olympus VX.XX</small>
            </div>
            <div className="col-sm-2 col-auto  p-2">
              <i className="fa fa-signal fa-lg text-light float-right "></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
