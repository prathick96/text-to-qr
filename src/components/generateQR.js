import React from "react";
import PropTypes from "prop-types";
import QRCode from "react-qr-code";

const GenerateQR = (props) => {
  return (
    <>
      <button
        class="btn btn-primary"
        type="button"
        data-toggle="collapse"
        data-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        Show QR
      </button>
      <div className="collapse" id="collapseExample">
        <br />
        <QRCode value={props.data} size={100} />
      </div>
    </>
  );
};

GenerateQR.propTypes = {
  data: PropTypes.string.isRequired
};

export default GenerateQR;
