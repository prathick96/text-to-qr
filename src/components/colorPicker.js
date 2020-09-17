import React, { useState } from "react";
import styled from "styled-components";

const ColorBox = styled.div`
  background-color: ${({ currentColor }) => currentColor};
  margin: auto;
  height: 50px;
  width: 50px;
`;

const RangeInput = ({ label, value, max = 100, onChange }) => {
  return (
    <div>
      {label}{" "}
      <input
        type="range"
        value={value}
        min={0}
        max={max}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
};

const ColorPicker = (props) => {
  const [hue, setHue] = useState(210);
  const [saturation, setSaturation] = useState(50);
  const [lightness, setLightness] = useState(50);

  const currentColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

  return (
    <div className="App">
      <h6>{props.Title}</h6>

      <ColorBox currentColor={currentColor} />

      <RangeInput label="Hue" value={hue} onChange={setHue} max={360} />
      <RangeInput
        label="Saturation"
        value={saturation}
        onChange={setSaturation}
      />
      <RangeInput
        label="Brightness"
        value={lightness}
        onChange={setLightness}
      />
    </div>
  );
};

export default ColorPicker;
