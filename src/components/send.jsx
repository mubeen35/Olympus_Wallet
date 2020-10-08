import React from "react";
import "./css/utilities.css";

const Send = () => {
  return (
    <div className="container-fluid send-container mb-0">
      <div className="row jusify-content-center my-3">
        <div className="col-sm-12 text-center">
          <h4 className="h4 text-light font-weight-bold f-size">
            Selected Wallet
          </h4>

          <h5 className="h5 text-light font-weight-light f-size">Wallet1</h5>
        </div>
        <div className="col-sm-12 text-center">
          <h4 className="h4 text-light font-weight-bold f-size">Amount</h4>
          <br />
          <div className="row justify-content-center">
            <div className="form-inline">
              <input type="text" className="form-control in inp" id="amount" />
              <h5
                htmlFor="amoun"
                className="font-weight-light ml-2 text-light f-size"
              >
                POLIS
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-6 col-xs-12  my-sm-3 mt-0 my-2">
          <input
            type="text"
            className="form-control  in"
            placeholder="PXF797sadaASDXCsdaAD34fwW3R2"
            id="search"
          />
        </div>
      </div>
      <div className="row justify-content-center mt-1">
        <h4 className="h4 text-light font-weight-bold f-size">
          Fee{" "}
          <span className="h4 font-weigh-light f-size">~0.00000037 Polis</span>
        </h4>
        <h4 className="h4 text-light font-weight-bold f-size">
          After Fee{" "}
          <span className="h4 font-weigh-light f-size">
            ~800.99999963 Polis
          </span>
        </h4>
        <span></span>
      </div>
      <div className="row justify-content-center my-4">
        <button className="btn btn1">SEND</button>
      </div>
    </div>
  );
};
export default Send;
