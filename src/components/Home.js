import React, { useState } from "react";
import { Label, Input } from "reactstrap";
import QRCode from "react-qr-code";

const Home = () => {
  const [qrText, setQrText] = useState("");

  const qrTextInput = (e) => {
    setQrText(e.target.value);
  };
  const data = JSON.stringify(qrText);
  return (
    <div className="container">
      <>
        <Label for="qrText">Text: </Label>
        <Input
          type="text"
          name="qrText"
          id="qrText"
          placeholder="Enter your text"
          value={qrText}
          onChange={qrTextInput}
          required
        />
        <br /> <br />
        <QRCode value={data} size={100} />
      </>
    </div>
  );
};

export default Home;
