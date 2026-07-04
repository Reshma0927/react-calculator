import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "AC", "DEL"
  ];

  function handleClick(value) {
    if (value === "AC") {
      setInput("");
    }
    else if (value === "DEL") {
      setInput((prev) => prev.slice(0, -1));
    }
    else if (value === "=") {
      try {
        if (input === "") return;
        setInput(eval(input).toString());
      } catch (error) {
        setInput("Error");
      }
    }
    else {
      if (input === "Error") {
        setInput(value);
      } else {
        setInput((prev) => prev + value);
      }
    }
  }

  return (
    <div className="container">
      <div className="calculator">

        <input
          type="text"
          value={input}
          readOnly
          className="display"
        />

        <div className="buttons">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className={
                btn === "="
                  ? "equal"
                  : btn === "AC"
                    ? "clear"
                    : btn === "DEL"
                      ? "delete"
                      : ["+", "-", "*", "/"].includes(btn)
                        ? "operator"
                        : ""
              }
            >
              {btn}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};

export default App;