import React, { useState } from "react";
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
        <input
          type="text"
          name="qrText"
          id="qrText"
          placeholder="Enter your text"
          value={qrText}
          onChange={qrTextInput}
          required
          style={{ width: "450px;" }}
        />
        <br />
        <br />
        <GenerateQR data={data} />
      </>
    </div>
  );
};

export default Home;
