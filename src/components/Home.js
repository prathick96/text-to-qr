import React, { useState, useReducer } from "react";
import InputColor from "react-input-color";
import GenerateQR from "./generateQR";

const Home = () => {
  const [qrText, setQrText] = useState("");
  const [initialBgColor, setInitialBgColor] = useState("#53416");
  const [initialFgColor, setInitialFgColor] = useState("#53416");
  const [bgColor, setBgColor] = useState({});
  const [fgColor, setFgColor] = useState({});

  const qrTextInput = (e) => {
    setQrText(e.target.value);
  };

  const sizeInp = (state, action) => {
    switch (action) {
      case "increment":
        return state + 10;

      case "decrement":
        return state - 10;

      default:
        return state;
    }
  };
  const [size, dispatch] = useReducer(sizeInp, 50);

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
          style={{ width: "450px" }}
        />
        <br /> <br />
        <label>
          BG Color:
          <input
            id="bgColor"
            type="color"
            value={bgColor.hex}
            onChange={(e) => setInitialBgColor(e.target.value)}
          />
          <br />
          <InputColor
            style={{ display: "none" }}
            initialValue={initialBgColor}
            onChange={setBgColor}
          />
        </label>
        <br />
        <label>
          FG Color:
          <input
            id="fgColor"
            type="color"
            value={fgColor.hex}
            onChange={(e) => setInitialFgColor(e.target.value)}
          />
          <br />
          <InputColor
            style={{ display: "none" }}
            initialValue={initialFgColor}
            onChange={setFgColor}
          />
        </label>
        <br />
        <label>
          size:
          <button onClick={() => dispatch("increment")}>+</button>
          &nbsp;<span>{size}</span>&nbsp;
          <button onClick={() => dispatch("decrement")}>-</button>
        </label>
        <GenerateQR
          value={data}
          size={size}
          bgColor={initialBgColor}
          fgColor={initialFgColor}
        />
      </>
    </div>
  );
};

export default Home;
