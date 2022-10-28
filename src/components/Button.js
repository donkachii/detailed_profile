import React from "react";
import "./button.css";

function Button({ name, link, id }) {
  return (
    <button className="btn_profile py-6 w-full mb-6" id={id}>
      {name}
    </button>
  );
}

export default Button;
