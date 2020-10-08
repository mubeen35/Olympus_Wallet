import React, { useState } from "react";
import Circle from "./circle";
import "./css/utilities.css";

const Network = () => {
  const [data] = useState([
    {
      balance: "100 POLIS",
      key: " asdASD234dsfA234aSD2wefdsfbjs..",
      epoch: "412",
      type: "starting",
    },
    {
      balance: "100 POLIS",
      key: " asdASD234dsfA234aSD2wefdsfbjs..",
      epoch: "412",
      type: "starting",
    },
    {
      balance: "100 POLIS",
      key: " asdASD234dsfA234aSD2wefdsfbjs..",
      epoch: "412",
      type: "active",
    },
    {
      balance: "100 POLIS",
      key: " asdASD234dsfA234aSD2wefdsfbjs..",
      epoch: "412",
      type: "error",
    },
  ]);
  return (
    <div className="container-fluid shadow custom-container bg-light flow">
      <div className="row">
        <h4 className="h4 font-weight-bold float-left ml-4 my-4 mr-sm-auto">
          Network Information
        </h4>
        <button
          type="button"
          className="btn btn-sm custom-btn mr-sm-3 mt-sm-4 mt-2 mb-sm-0 ml-sm-0 ml-5 mb-2 "
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Create Validator
        </button>
        <div
          className="modal fade mar1"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog " role="document">
            <div className="modal-content">
              <div className="modal-header bg">
                <h5
                  className="modal-title text-light mar m-0"
                  id="exampleModalLabel"
                >
                  Create Validator{" "}
                </h5>
                <button
                  type="button"
                  className="close text-light"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body" style={{ overflow: "scroll" }}>
                <h6 className="h6 my-2">
                  Please past the output of the following command in the space
                  bellow.
                </h6>
                <div className="background my-2 shadow-sm p-4 m-3">
                  <h5>genvalidatorkey $VALIDATOR_AMOUNT</h5>
                </div>
                <textarea
                  className="form-control my-2"
                  rows="7"
                  placeholder="[
                      'assdasAS23A4343dsaS325256zDASDasd',
                      'assdasAS23A4343dsaS325256zDASDasd',
                      'assdasAS23A4343dsaS325256zDASDasd',
                      'assdasAS23A4343dsaS325256zDASDasd',
                  ]"
                ></textarea>
              </div>
              <div className="modal-footer p-0 ">
                <button
                  type="button"
                  className="btn-block b-radius bg text-light m-0 font-weight-bold p-4 border-0"
                >
                  Start Genrated Validators
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="card background shadow custom-card mx-2">
          <div className="row">
            <div className="col-sm-6 col-auto ">
              <h6 className="h6 font-weight-light mx-2 mt-2 f4">
                Block Height
                <span className="ml-2 font-weight-bold  f4">273,762</span>
              </h6>
              <h6 className="h6 font-weight-light mx-2  f4">
                Network Participation
                <span className="ml-2 font-weight-bold  f4">75 %</span>
              </h6>
              <h6 className="h6 font-weight-light mx-2  f4">
                No. of Validators
                <span className="ml-2 font-weight-bold  f4">4/128</span>
              </h6>
            </div>
            <div className="col-sm-6 col-auto mt-4">
              <h6 className="h6 font-weight-light mx-1 mb-1  f4">
                Epoch
                <span className="ml-2 font-weight-bold  f4">412</span>
              </h6>
              <h6 className="h6 font-weight-light mx-1 mb-1  f4">
                No. of Peers
                <span className="ml-2 font-weight-bold">412</span>
              </h6>
            </div>
          </div>
        </div>
        <div className="card shadow background custom-card mx-2 my-sm-0 my-2">
          <div className="row justify-content-center">
            <h6 className="h6  my-2 font-weight-bold f4">Validator Summary</h6>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-4 col-auto">
              <h6 className="h6 text-center">
                <span className="font-weight-bold text-info f1">ACTIVE</span>
              </h6>
              <p className="ml-4 text-center">1</p>
            </div>
            <div className="col-sm-4 col-auto">
              <h6 className="h6 f1">
                <span className="font-weight-bold text-warning">STARTING</span>
              </h6>
              <p className="ml-4">2</p>
            </div>
            <div className="col-sm-4 col-auto">
              <h6 className="h6">
                <span className="font-weight-bold text-danger">ERROR</span>
              </h6>
              <p className="ml-4">1</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <h4 className="h4 font-weight-bold float-left ml-4 my-4 mr-auto">
          Validators
        </h4>
      </div>
      <div className="row justify-content-center">
        {data.map((dat) => (
          <div className="card valid-card m-3 sahdow ">
            <div className="row">
              <div className="hov"></div>
              <button
                type="button"
                className=" container border-0 cross text-center shadow"
              >
                <i className="fa fa-times fa-lg"></i>
              </button>
            </div>

            <h5 className="h5 font-weight-bold text-light mx-2 f-size">
              Balance{" "}
              <span className="font-weight-light ml-2">{dat.balance}</span>
            </h5>
            <h5 className="h5 font-weight-bold text-light mx-2 f-size">
              Public Key{" "}
              <span className="font-weight-light ml-2 f4">{dat.key}</span>
            </h5>
            <h5 className="h5 font-weight-bold text-light mx-2 f-size">
              Active Since (epoch){" "}
              <span className="font-weight-light ml-2"> {dat.epoch}</span>
            </h5>
            <div className="row">
              <div className="col-sm-11 col-xs-10"></div>
              <div className="col-sm-1 col-xs-2">
                <Circle props={dat.type} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Network;
