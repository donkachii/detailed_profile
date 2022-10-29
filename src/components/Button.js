import React from "react";
import "./button.css";

function Button({ name, link, id }) {
  return (
    <button
      className="btn_profile py-6 w-full mb-6"
      id={id}
      onClick={(e) => {
        window.open(link);
        e.preventDefault();
      }}
    >
      {name}
    </button>
  );
}

export default Button;
