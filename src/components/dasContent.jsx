import React from "react";
import "./css/utilities.css";

const Cont = () => {
  return (
    <div className="container-fluid shadow rounded custom-container ">
      <div className="row justify-content-center m-0">
        <div className="card  text-center m-3 shadow bal">
          <h5 className="h5 text-light f-size">Balance</h5>
          <h1 className="h1 mt-sm-4 mt-2 text-light f-size">
            {" "}
            1,234.5006 POLIS
          </h1>
          <h6 className="h6 mt-1 text-light f-size">(703.665342 USD)</h6>

          <p className="mt-sm-3 mt-2 text-light f-size">
            UnconFirmed: 1240.000 POLIS
          </p>
          <p className="mt-sm-1 text-light f-size">Latest Block: 684161</p>
        </div>
        <div className="card text-black text-center m-3 shadow tbd">
          <h1 className="display-4 font-weight-bold my-5 f-size">
            TBD CONTENT
          </h1>
        </div>
      </div>
      <div className="row justify-content-center m-3">
        <div className="col-sm-6 col-xs-12 col-auto text-center">
          <h6 className="h5 font-weight-bold">Transation History</h6>
          <div className=" table-responsive tbl-sm ">
            <table class="table m-0">
              <thead>
                <tr className="text-light">
                  <th scope="col"></th>
                  <th scope="col">Date</th>
                  <th scope="col">Destination Address</th>
                  <th scope="col">Amount POLIS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <button type="button" className="bg-transparent border-0">
                      <i className="fa fa-arrow-circle-down fa-lg"></i>
                    </button>
                  </th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">
                    <button type="button" className="bg-transparent border-0">
                      <i className="fa fa-arrow-circle-down fa-lg"></i>
                    </button>
                  </th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">
                    <button type="button" className="bg-transparent border-0">
                      <i className="fa fa-arrow-circle-down fa-lg"></i>
                    </button>
                  </th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-sm-6 col-xs-12 col-auto text-center latest">
          <h6 className="h5 font-weight-bold">Latest News</h6>
          <div className="row flow">
            <div className="col-sm-4">
              <img
                className="shadow img img-responsive"
                src="https://bestforandroid.com/apk/wp-content/uploads/2019/02/amazon-appstore-header-2.jpg"
                alt="im"
              />
            </div>
            <div className="col-sm-7 text-left">
              <span>
                <h6 className="h5 mt-3 f-size">
                  Use your IDX on real-world goods and services.
                </h6>
                <br />
                <p className="text-muted f2">
                  {" "}
                  by Nadiya Castiljea | Aug 18, 2020
                </p>
              </span>
            </div>
          </div>
          <div className="row m-2 f-size">
            <h6> Use your IDX on real-world goods and services.</h6>
            <span className="text-muted ml-sm-5 f2"> Aug 18, 2020</span>
          </div>
          <div className="row m-2 f-size">
            <h6> Use your IDX on real-world goods and services.</h6>
            <span className="text-muted ml-sm-5 f2"> Aug 18, 2020</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cont;
