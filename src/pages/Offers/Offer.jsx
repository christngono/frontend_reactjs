import React from "react";
import "./Offer.css";
import ProgressBar from "../../shared-components/ProgressBar/ProgressBar";
import Cart from "../../shared-components/Cart/Cart";
import CloseButt from "../../shared-components/CloseButt/CloseButt";

const Offer = () => {
  return (
    <div className={"container"}>
      <div className="row">
        <>
          <div
            style={{
              position: "relative",
              top: "110px",
              left: "-50px",
            }}
          >
            <CloseButt />
          </div>
          <div style={{ marginTop: "82px" }}>
            <ProgressBar percent={"75"} />
          </div>
        </>
      </div>
      <div className={"d-flex justify-content-center mt-5"}></div>
      <div className={"text-center"}>
        <h3>Des offres adaptées pour une année réussie </h3>
      </div>
      <div className="container-lg">
        <div className={"row"}>
          <div className="col-lg-4">
            <Cart />{" "}
          </div>
          <div className="col-lg-4">
            <Cart />
          </div>
          <div className="col-lg-4">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
