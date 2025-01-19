import React from "react";

function Button({ onClick, children, disabled }) {
  return (
    <button
      className={`custom-button ${disabled ? "disabled" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
