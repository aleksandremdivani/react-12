import React from "react";

const ColorBox = React.memo(({ color }) => {
  return (
    <div
      className="w-[800px] rounded-lg h-[600px] flex justify-center items-center"
      style={{
          backgroundColor: "rgba(0, 0, 0, 0.15)",
      }}
    >
      <div
        className="w-[600px] h-[400px] rounded-lg"
        style={{
          backgroundColor: color,
        }}
      ></div>
    </div>
  );
});

export default ColorBox;
