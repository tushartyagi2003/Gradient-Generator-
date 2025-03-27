import { useState } from "react";

import "./App.css";

function App() {
  const [color1, setColor1] = useState("#000000");
  const [color2, setColor2] = useState("#ffffff");
  const [angle, setAngle] = useState("to right");

  const randomcolor = () => {
    let color = "#";
    const letters = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  };

  const handleButton1 = () => {
    const newcolor1 = randomcolor();
    setColor1(newcolor1);
  };

  const handleButton2 = () => {
    const newcolor2 = randomcolor();
    setColor2(newcolor2);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`background: ${gradient};`);
    alert("Gradient copied to clipboard!");
  };

  const handleAngleChange = (e) => {
    setAngle(e.target.value);
  };

  const gradient = `linear-gradient(${angle}, ${color1}, ${color2})`;

  return (
    <>
      <div
        style={{
          background: gradient,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="App"
      >
        <div>
          <label htmlFor="angle">Gradient : </label>
          <select value={angle} id="angle" onChange={handleAngleChange}>
            <option value="to right">To Right</option>
            <option value="to left">To Left</option>
            <option value="to bottom">To Bottom</option>
            <option value="to top">To Top</option>
            <option value="45deg">45deg</option>
            <option value="90deg">90deg</option>
            <option value="135deg">135deg</option>
            <option value="180deg">180deg</option>
          </select>
        </div>

        <button className="button" onClick={handleButton1}>
          {color1}
        </button>

        <button className="button" onClick={handleButton2}>
          {color2}
        </button>

        <button className="button" onClick={copyToClipboard}>
          Copy Text
        </button>
      </div>
    </>
  );
}

export default App;
