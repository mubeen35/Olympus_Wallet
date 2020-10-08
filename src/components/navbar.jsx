import React, { useState } from "react";
import "./css/sidebar.css";
import FileList from "./fileList";

const Navbar = ({ toggle, head }) => {
  const [walletData] = useState([{ w: "Wallet1" }, { w: "Wallet2" }]);
  const Insert = () => {
    let arr = [];
    for (let i = 1; i < 25; i++) {
      arr.push(
        <div className="col-sm-3 col-auto">
          <div className="form-inline my-2">
            <p>{i}.</p>
            <input type="text" className="form-control rad ml-2 w-75" />
          </div>
        </div>
      );
    }
    return arr;
  };
  return (
    <div className="container-fluid p-0" style={{ backgroundColor: "#384b97" }}>
      <div className="row m-0 justify-content-center">
        <div className=" col-sm-1 col-auto p-0" id="collapse-btn">
          <button
            className={"bg-transparent my-1 border-0 ml-2 px-sm-2 pr-3"}
            onClick={toggle}
          >
            <i className="fa fa-bars fa-2x rounded-circle"></i>
          </button>
        </div>
        <div className=" col-sm-8 col-auto p-0">
          <h1 className="h3 text-light text-center font-weight-bold f-size p-sm-0 pt-2">
            {head}
          </h1>
        </div>

        <div className="col-sm-3 col-auto p-0">
          <div className="dropdown l">
            <button
              className="btn btn-default dropdown-toggle text-light"
              type="button"
              id="dropdownMenu1"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              Select / Add Wallet <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              {walletData.map((x) => (
                <li>
                  <a href={x.w} className="dropdown-item">
                    {x.w}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#add"
                  className="dropdown-item"
                  data-toggle="modal"
                  data-target="#modal1"
                >
                  Add Wallet
                </a>
              </li>
            </ul>
          </div>
          <div
            className="modal fade "
            id="modal1"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog " role="document">
              <div className="modal-content">
                <div className="modal-header bg">
                  <h5
                    className="modal-title text-light font-weight-bold mar f-size"
                    id="exampleModalLabel"
                  >
                    Add Wallet
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
                <div className="modal-body">
                  <div className="container-fluid p-0">
                    <div className="row justify-content-center m-2">
                      <a
                        href="#add"
                        className="btn bg text-light font-weight-bold rad"
                      >
                        Create Wallet
                      </a>
                    </div>
                  </div>
                  <div className="row justify-content-center m-2">
                    <h6 className="h6 font-weight-bold text-dark">- or -</h6>
                  </div>
                  <div className="row justify-content-center m-2">
                    <a
                      href="#add"
                      className="btn bg text-light font-weight-bold rad"
                      data-toggle="modal"
                      data-target="#modal3"
                    >
                      Migrate From Polis Core
                    </a>
                    <div
                      class="modal fade"
                      id="modal3"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header bg">
                            <h5
                              class="modal-title font-weight-bold mar text-light m-0 f-size"
                              id="exampleModalLabel"
                            >
                              Migrate From Polis Core
                            </h5>
                            <button
                              type="button"
                              class="close text-light"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            <div className="row text-center">
                              <h6 className="h6 ">
                                Retrive the XXXXXX.YYY file from $destination
                                and select it on the dialog.
                              </h6>
                            </div>
                            <div className="row justify-content-center dnd">
                              <FileList />
                            </div>
                            <div className="row justify-content-center">
                              <div className="form-inline">
                                <p className="text-muted mt-sm-2"> or </p>
                                <input
                                  type="file"
                                  className="btn bg-light p-0 m-sm-0 ml-2"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center m-2 ">
                    <a
                      href="#add"
                      className="btn bg text-light font-weight-bold rad"
                      data-toggle="modal"
                      data-target="#modal2"
                    >
                      Import Mnemonic
                    </a>
                    <div
                      className="modal fade"
                      id="modal2"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content wid">
                          <div className="modal-header bg">
                            <h5
                              className="modal-title text-light font-weight-bold marg  f-size"
                              id="exampleModalLabel"
                            >
                              Import Mnemonic
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
                          <div className="modal-body">
                            <div className="container-fluid p-0">
                              <div className="row justify-content-center">
                                <p>Write wallet name</p>
                              </div>
                              <div className="row justify-content-center">
                                <input
                                  type="text"
                                  className="form-control w-25 rad"
                                />
                              </div>
                              <div className="row justify-content-center p-3">
                                <p className="text-center">
                                  Please write each word from your mnemonic
                                  phrase in the <br /> following input fields.
                                  Usually 12 words, but it can be upto 24 words
                                  in length.
                                </p>
                              </div>
                              <div className="row justify-content-center">
                                <Insert />
                              </div>
                            </div>
                          </div>
                          <div className="modal-footer p-0 ">
                            <button
                              type="button"
                              className="btn-block b-radius bg text-light m-0 font-weight-bold p-4 border-0"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
