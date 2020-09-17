import React from "react";
import PropTypes from "prop-types";
import QRCode from "qrcode.react";

const GenerateQR = (props) => {
  const downloadQR = () => {
    const canvas = document.getElementById("qr_code");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qr_code.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <>
      <div className="container">
        <br />
        <QRCode
          id={"qr_code"}
          value={props.value}
          size={props.size}
          bgColor={props.bgColor}
          fgColor={props.fgColor}
          includeMargin={false}
          renderAs={"canvas"}
        />
        <br />
        <button className={"button btn-primary"} onClick={downloadQR}>
          Download QR
        </button>
      </div>
    </>
  );
};

GenerateQR.propTypes = {
  value: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  bgColor: PropTypes.string.isRequired,
  fgColor: PropTypes.string.isRequired
};

export default GenerateQR;
