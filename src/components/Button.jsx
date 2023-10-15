import React from "react";
import "../styles/Button.css";

const Button = ({ text, isClickButton, clickHandler }) => {
  return(
    <button
      className={ isClickButton ? "click-button" : "reset-button" }
      onClick={clickHandler}
    >
      {text}
    </button>
  )
}

export default Button;