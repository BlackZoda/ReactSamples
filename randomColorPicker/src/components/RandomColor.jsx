import { useEffect } from "react";
import { useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const randomColorStyles = {
    width: "100vw",
    height: "100vh",
    background: color,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const buttonStyles = {
    margin: "5px",
    padding: "10px 20px",
    backgroundColor: "#223",
    border: "none",
    borderRadius: "5px",
    color: "#fff",
  };

  const buttonWrapper = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const randomColorUtil = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleGenerateRandomHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtil(hex.length)];
    }

    setColor(hexColor);
  };

  const handleGenerateRandomRgbColor = () => {
    const r = randomColorUtil(255);
    const g = randomColorUtil(255);
    const b = randomColorUtil(255);

    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  useEffect(() => {
    typeOfColor === "hex"
      ? handleGenerateRandomHexColor()
      : handleGenerateRandomRgbColor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeOfColor]);

  return (
    <div className="container" style={randomColorStyles}>
      <h1>{color}</h1>
      <div style={buttonWrapper}>
        <button
          type="button"
          style={buttonStyles}
          onClick={() => setTypeOfColor("hex")}
        >
          Create HEX Color
        </button>
        <button
          type="button"
          style={buttonStyles}
          onClick={() => setTypeOfColor("rgb")}
        >
          Create RGB Color
        </button>
        <button
          type="button"
          style={buttonStyles}
          onClick={
            typeOfColor === "hex"
              ? handleGenerateRandomHexColor
              : handleGenerateRandomRgbColor
          }
        >
          Generate Random Color
        </button>
      </div>
    </div>
  );
};

export default RandomColor;
