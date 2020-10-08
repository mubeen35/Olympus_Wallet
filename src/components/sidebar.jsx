import React, { useState } from "react";
import { Link } from "react-router-dom";
import { WalletFilled, DashboardFilled } from "@ant-design/icons";
import "./css/sidebar.css";

const Sidebar = ({ setDash, wa, gov, set, net }) => {
  const [ids] = useState([
    { id: "0" },
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
  ]);

  const hideNseek = () => {
    const show = document.getElementById("show");
    const hide = document.getElementById("hide");
    const side = document.getElementById("sidebar-wrapper");

    let arr = [];
    ids.map((i) => {
      let x = document.getElementById(i.id);
      arr.push(x);
      return null;
    });

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].hidden === false) {
        arr[i].hidden = true;
      } else {
        arr[i].hidden = false;
      }
    }
    if (show.hidden === true) {
      show.hidden = false;
      hide.hidden = true;
      show.style.marginTop = "260px";
      side.style.width = "60px";
      side.style.transition = "width 1s";
    } else {
      hide.hidden = false;
      show.hidden = true;
      side.style.width = "250px";
      side.style.transition = "width 1s";
    }
  };

  return (
    <div id={"sidebar-wrapper"} className="w-phn">
      <div className={"text-center shadow-sm p-0 logo"}>
        <Link className={"navbar-brand m-sm-0 ml-1 "} to={"/"}>
          <i className={"fa fa-lg float-left text-light "}>
            <img
              src={require("./l1.png")}
              alt="logo"
              className="lo"
              style={{ width: "30px", height: "30px" }}
            />
          </i>
          <span className={"h5 text-light "} id="0">
            <img
              src={require("./l2.png")}
              alt="logo"
              className="lo f3"
              style={{ width: "70px", height: "30px" }}
            />
          </span>
        </Link>
      </div>
      <div className={"list-group"}>
        <Link to="/" className={"px-3 text-light back"} onClick={setDash}>
          <i className={"fa fa-lg float-left mr-3 mt-1 ml-sm-0 ml-1 "}>
            <DashboardFilled />
          </i>
          <span id="1" className="f3">
            <strong>Dashboard</strong>
          </span>
        </Link>

        <Link to="/Wallet" className={" px-3 text-light  back"} onClick={wa}>
          <i className={"fa  fa-lg float-left mr-3 mt-1 ml-sm-0 ml-1"}>
            <WalletFilled />
          </i>
          <span id="2" className="f3">
            <strong>Wallet</strong>
          </span>
        </Link>
        <Link
          to="/Governance/Technology"
          className={" px-3 text-light back"}
          onClick={gov}
        >
          <i
            className={"fa fa-users fa-lg float-left mr-3 mt-1 ml-sm-0 ml-1"}
          ></i>
          <span id="3" className="f3">
            <strong>Governance</strong>
          </span>
        </Link>
        <Link to="/Settings" className={" px-3 text-light back"} onClick={set}>
          <i
            className={"fa fa-cog fa-lg float-left mr-3 mt-1 ml-sm-0 ml-1"}
          ></i>
          <span id="4" className="f3">
            <strong>Settings</strong>
          </span>
        </Link>

        <Link to="Network" className={" px-3 text-light back"} onClick={net}>
          <i
            className={"fa fa-server fa-lg float-left mr-3 mt-1 ml-sm-0 ml-1"}
          ></i>
          <span id="5" className="f3">
            <strong>Network</strong>
          </span>
        </Link>
      </div>
      <button
        className="btn btn-block border-0 rounded-0 co f3"
        id="hide"
        onClick={hideNseek}
      >
        <i className="fa fa-angle-left fa-lg text-light float-right"></i>
      </button>
      <button
        className="btn btn-block border-0 rounded-0 co f3"
        id="show"
        onClick={hideNseek}
        hidden
      >
        <i className="fa fa-angle-right fa-lg text-light float-right"></i>
      </button>
    </div>
  );
};

export default Sidebar;
