import React, { useState } from "react";
import "./Calculator.css";
function Calculator() {
  const [output, setOutput] = useState("");
  const clear = () => {
    setOutput("");
  };
  const equal = () => {
    setOutput(eval(output).toString());
  };
  const handleclick = (e) => {
    setOutput(output.concat(e.target.name));
  };
  return (
    <div className="parent">
      <div className="child">
        <h1>Calculator</h1>
        <form>
          <input type="text" value={output} />
        </form>
        <div className="calculator">
          <button className="clear" name="" type="button" onClick={clear}>
            Clear
          </button>
          <button name="/" type="button" onClick={handleclick}>
            /
          </button>
          <button name="*" type="button" onClick={handleclick}>
            *
          </button>
          <button name="7" type="button" onClick={handleclick}>
            7
          </button>
          <button name="8" type="button" onClick={handleclick}>
            8
          </button>
          <button name="9" type="button" onClick={handleclick}>
            9
          </button>
          <button name="-" type="button" onClick={handleclick}>
            -
          </button>
          <button name="4" type="button" onClick={handleclick}>
            4
          </button>
          <button name="5" type="button" onClick={handleclick}>
            5
          </button>
          <button name="6" type="button" onClick={handleclick}>
            6
          </button>
          <button name="+" type="button" onClick={handleclick}>
            +
          </button>
          <button name="1" type="button" onClick={handleclick}>
            1
          </button>
          <button name="2" type="button" onClick={handleclick}>
            2
          </button>
          <button name="3" type="button" onClick={handleclick}>
            3
          </button>
          <button name="." type="button" onClick={handleclick}>
            .
          </button>
          <button
            className="equal"
            name="0"
            type="button"
            onClick={handleclick}
          >
            0
          </button>
          <button className="equal" type="button" onClick={equal}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
