import React from "react";
import "./css/utilities.css";
const Receive = () => {
  var QRCode = require("qrcode.react");

  return (
    <div className="container-fluid receive-container mb-0">
      <div className="row">
        <div className="col-sm-12 col-xs-12 mt-2 text-center">
          <h4 className="h4 font-weight-bold text-dark">Wallet 1</h4>
          <QRCode
            id={"1234"}
            value={"1234"}
            size={250}
            bgColor="#ffffff"
            level={"H"}
            includeMargin={true}
            className="my-3 rounded shadow-sm brdr"
          />
          <div className="row justify-content-center mr-sm-4">
            <div className="col-sm-2 col-xs-12">
              <h6 className=" h6 float-right mt-2">Set Amount</h6>
            </div>
            <div className="col-sm-3 col-xs-12 text-center">
              <form>
                <div class="input-group  mb-2">
                  <input type="text" class="form-control ml-2" />
                  <div class="input-group-prepend text-center">
                    <button className="btn rounded input-group-text">
                      <i className="fa fa-arrow-right text-light"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="row justify-content-center mt-2">
            <div className="col-auto col-xs-12 text-muted f2">
              PXAvd32DSasadsAS3242ds24FDSF234dsfdsdwPXAvd32DSasads
            </div>
            <div className="col-sm-1 col-auto">
              <button className="btn bg-transparent border-0 float-left">
                <i className="fa fa-clipboard fa-lg text-muted"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Receive;
