import React from "react";
import "./css/utilities.css";

const Settings = () => {
  return (
    <div className="container-fluid shadow set-container bg-light m-0">
      <div className="row">
        <h4 className="h4 font-weight-bold float-left ml-4 my-4">
          System Settings
        </h4>
      </div>
      <div className="row my-3 p-3 background shadow-sm">
        <div className="col-auto mx-sm-2">
          <i className="fa fa-language fa-2x"></i>
        </div>
        <div className="col-auto mx-sm-2 m-sm-0 mt-1">
          <h5 className="h5 font-weight-bold f-size">Language</h5>
        </div>
        <div className=" col-sm-8 col-auto ml-sm-4 ml-2">
          <div class="dropdown float-right ">
            <button
              class="btn bg-tranparent border-0 dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              English
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <button class="dropdown-item bg-tranparent border-0">
                English
              </button>
              <button class="dropdown-item bg-tranparent border-0">
                French
              </button>
              <button class="dropdown-item bg-tranparent border-0">
                Spanish
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3 p-3 background shadow-sm">
        <div className="col-auto mx-sm-2">
          <i className="fa fa-percent fa-2x"></i>
        </div>
        <div className="col-auto mx-sm-2 m-sm-0 mt-1">
          <h5 className="h5 font-weight-bold f-size">Rates Source</h5>
        </div>
        <div className=" col-sm-8 col-auto  mx-sm-2 ml-sm-0">
          <div class="dropdown float-right ">
            <button
              class="btn bg-tranparent border-0 dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Obal{" "}
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <button class="dropdown-item bg-tranparent border-0">
                Currency
              </button>
              <button class="dropdown-item bg-tranparent border-0">Obal</button>
              <button class="dropdown-item bg-tranparent border-0">
                Spanish
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3 p-3 background shadow-sm">
        <div className="col-auto mx-sm-2">
          <i className="fa fa-project-diagram fa-2x"></i>
        </div>
        <div className="col-auto mx-sm-2 m-sm-0 mt-1">
          <h5 className="h5 font-weight-bold f-size">Modify Node URL</h5>
        </div>
      </div>
    </div>
  );
};
export default Settings;
