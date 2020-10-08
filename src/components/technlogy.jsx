import React, { useState } from "react";
import "./css/utilities.css";

const Technology = () => {
  const [contributors] = useState([
    {
      name: "1. melchiondanetwork",
    },
    {
      name: "2. eros",
    },
    {
      name: "3. evilbyte",
    },
    {
      name: "4. sido",
    },
    {
      name: "5. ores",
    },
  ]);
  const [voter] = useState([
    {
      pr: "proposal",
      by: "Helios",
    },
    {
      pr: "proposal",
      by: "Eros",
    },
    {
      pr: "proposal",
      by: "Melchioda Network",
    },
    {
      pr: "proposal",
      by: "Ares",
    },
    {
      pr: "proposal",
      by: "Sido",
    },
  ]);
  const showContent = () => {
    var x = document.getElementById("content");
    var y = document.getElementById("show_btn");

    if (x.hidden === true) {
      x.hidden = false;
      y.hidden = true;
    } else {
      x.hidden = true;
      y.hidden = false;
    }
  };
  return (
    <div className="container-fluid tch-cont bg-light shadow flow">
      <div className="row">
        <h4 className="h4 font-weight-bold float-left ml-4 my-4 mr-sm-auto f-size">
          Current DAO Manager{" "}
          <span className="font-weight-light f5"> helios</span>{" "}
        </h4>
        <button
          type="button"
          className="btn btn-sm custom-btn mr-sm-3 mt-sm-4 mt-2 mb-sm-0 ml-sm-0 ml-5 mb-2 "
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Voting Cycle Available
        </button>
        <div
          className="modal fade "
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog " role="document">
            <div className="modal-content">
              <div className="modal-header border-0 bg ">
                <div className="row justify-content-center">
                  <h5
                    className="modal-title text-light mx-sm-5 f1"
                    id="exampleModalLabel"
                  >
                    DAO Techology Manager Candidates
                  </h5>
                </div>

                <button
                  type="button"
                  className="close text-light"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body border-0 p-0 px-3">
                <div className="container-fluid p-0 border-0">
                  <div className="row justify-content-center">
                    <div
                      className="col-sm-2 border-0 col-auto p-0 lef"
                      style={{ backgroundColor: "#6a79b1" }}
                    >
                      {voter.map((x) => (
                        <h6 className="h6 text-light font-weight-bold p-2">
                          {x.pr}
                        </h6>
                      ))}
                    </div>
                    <div className="col-sm-10 col-auto ">
                      {voter.map((y) => (
                        <div className="row  bord">
                          <div className="col-sm-10 col-auto p-2">
                            <h6 className="h6 font-weight-light">{y.by}</h6>
                          </div>
                          <div className="col-sm-2 col-auto p-2">
                            <div class="pretty p-default p-round ">
                              <input type="checkbox" />
                              <div class="state p-success-o">
                                <label></label>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer border-0 p-0 ">
                <button
                  type="button"
                  className="btn-block b-radius bg text-light m-0 font-weight-bold p-4 border-0"
                >
                  Vote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row p-2">
        <div className="col-sm-8 col-auto">
          <div className="row justify-content-center">
            <div className=" tech-card shadow-sm m-2">
              <div className="row justify-content-center">
                <img className="img-brdr shadow ml-4 my-2" alt="" />
              </div>
              <div className="row m-1">
                <h6 className="h6 text-muted">Sept 1 -22d</h6>
                <h6 className="h6 font-weight-bold">
                  SatoshiGoods.com - community discount / Team Clothing
                </h6>
              </div>
              <div className="row px-4">
                <p className="mr-auto"></p>
                <h6 className="h6 text-muted ">proposed by Sido</h6>
              </div>
              <div
                className="row justify-content-center px-4"
                id="content"
                hidden
              >
                <p className=" text-muted">
                  SatoshiGoods.com - community discount / Team Clothing
                  SatoshiGoods.com - community discount / Team Clothing
                  SatoshiGoods.com - community discount / Team Clothing
                </p>
                <button
                  type="button"
                  className="btn bg-transparent border-0"
                  onClick={showContent}
                >
                  <i className="fa fa-angle-up text-center"></i>
                </button>
              </div>
              <div className="row justify-content-center px-4" id="show_btn">
                <button
                  type="button"
                  className="btn bg-transparent border-0"
                  onClick={showContent}
                >
                  <i className="fa fa-angle-down text-center"></i>
                </button>
              </div>
              <div className="row p-0 m-0">
                <div className="col-sm-6 col-auto p-0 m-0">
                  <button
                    type="button"
                    className="btn background shadow text-light l-corner"
                  >
                    Learn More
                  </button>
                </div>
                <div className="col-sm-6 col-auto p-0 m-0">
                  <button
                    type="button"
                    className="btn bg shadow text-light r-corner"
                  >
                    Vote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-auto">
          <div className="card background shadow-sm w-sml">
            <h5 className="h5 font-weight-bold my-2 text-center card-title">
              Top 5 Contributors
            </h5>
            {contributors.map((contr) => (
              <div className="row justify-content-left">
                <img className="img-brdr shadow ml-4 my-2" alt="" />

                <p className="font-weight-bold mt-3 ml-2">
                  <span>{contr.name}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Technology;
