import React from "react";
import PropTypes from "prop-types";
import QRCode from "qrcode.react";

const QR = (props) => {
  return (
    <>
      <div className="container">
        <br />
        <QRCode
          value={props.value}
          size={props.size}
          bgColor={props.bgColor}
          fgColor={props.fgColor}
          includeMargin={false}
          renderAs={"canvas"}
        />
      </div>
    </>
  );
};

QR.propTypes = {
  value: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  bgColor: PropTypes.string.isRequired,
  fgColor: PropTypes.string.isRequired
};

export default QR;
