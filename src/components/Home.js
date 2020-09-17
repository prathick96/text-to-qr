import React, { useState } from "react";
import { Input } from "reactstrap";
import GenerateQR from "./generateQR";

const Home = () => {
  const [qrText, setQrText] = useState("");

  const qrTextInput = (e) => {
    setQrText(e.target.value);
  };
  const data = JSON.stringify(qrText);
  return (
    <div className="container">
      <>
        <Input
          type="text"
          name="qrText"
          id="qrText"
          placeholder="Enter your text"
          value={qrText}
          onChange={qrTextInput}
          required
        />
        <br />
        <GenerateQR data={data} />
      </>
    </div>
  );
};

export default Home;
