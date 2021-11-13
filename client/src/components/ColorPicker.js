import React, { useState } from "react";
import ColorPicker from "react-color-picker";

const ColorPick = () => {
  const [color, setColor] = useState("red");

  function onDrag(color, c) {
    setColor(color);
  }
  return (
    <div>
      <ColorPicker value={color} onDrag={onDrag.bind(this)} />
      <div
        style={{
          background: color,
          width: 100,
          height: 50,
          color: "white",
        }}
      >
        {color}
      </div>
    </div>
  );
};

export default ColorPick;
