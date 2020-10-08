import React from "react";
import "./css/utilities.css";
const TransHistory = () => {
  return (
    <div className="container-fluid bg-light tx">
      <div className="row">
        <div className="col-sm-1 col-xs-12  my-sm-3 my-2 ">
          <label htmlFor="search" className="font-weight-bold ml-2">
            Search:
          </label>
        </div>

        <div className="col-sm-5 col-xs-12 my-sm-3 my-2">
          <input
            type="text"
            className="form-control"
            placeholder="Look by date, transaction type, address, label etc.."
            id="search"
          />
        </div>
      </div>
      <div className="row justify-content-center my-3">
        <div className=" table-responsive tbl m-4 ">
          <table class="table m-0">
            <thead>
              <tr className="text-light">
                <th scope="col"></th>
                <th scope="col">Date</th>
                <th scope="col">Type</th>
                <th scope="col">Destination Address</th>
                <th scope="col">Amount(POLIS)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <button type="button" className="bg-transparent border-0">
                    <i className="fa fa-arrow-circle-down fa-lg"></i>
                  </button>
                </th>
                <td>14/09/2020 05:04</td>
                <td>Payment to yourself</td>
                <td>(PVcdsbb44657sayx8sd7SADAxcas324dS)</td>
                <td>2.304000</td>
              </tr>
              <tr>
                <th scope="row">
                  <button type="button" className="bg-transparent border-0">
                    <i className="fa fa-arrow-circle-down fa-lg"></i>
                  </button>
                </th>
                <td>14/09/2020 05:04</td>
                <td>Payment to yourself</td>
                <td>(PVcdsbb44657sayx8sd7SADAxcas324dS)</td>
                <td>2.304000</td>
              </tr>
              <tr>
                <th scope="row">
                  <button type="button" className="bg-transparent border-0">
                    <i className="fa fa-arrow-circle-down fa-lg"></i>
                  </button>
                </th>
                <td>14/09/2020 05:04</td>
                <td>Payment to yourself</td>
                <td>(PVcdsbb44657sayx8sd7SADAxcas324dS)</td>
                <td>2.304000</td>
              </tr>
              <tr>
                <th scope="row">
                  <button type="button" className="bg-transparent border-0">
                    <i className="fa fa-arrow-circle-down fa-lg"></i>
                  </button>
                </th>
                <td>14/09/2020 05:04</td>
                <td>Payment to yourself</td>
                <td>(PVcdsbb44657sayx8sd7SADAxcas324dS)</td>
                <td>2.304000</td>
              </tr>
              <tr>
                <th scope="row">
                  <button type="button" className="bg-transparent border-0">
                    <i className="fa fa-arrow-circle-down fa-lg"></i>
                  </button>
                </th>
                <td>14/09/2020 05:04</td>
                <td>Payment to yourself</td>
                <td>(PVcdsbb44657sayx8sd7SADAxcas324dS)</td>
                <td>2.304000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default TransHistory;
