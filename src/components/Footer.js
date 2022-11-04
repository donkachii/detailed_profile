import React from "react";
import zuriImg from "../assets/images/zuri__img.svg";
import ingressiveImg from "../assets/images/ingressive__img.svg";

const Footer = () => {
  return (
    <footer className=" w-full">
      <hr />
      <div className="space-y-4 md:flex items-center justify-between py-12 w-full md:space-y-0">
        <img src={zuriImg} alt="zuri" />
        <p className="text-left">HNG Internship 9 Frontend Task</p>
        <img src={ingressiveImg} alt="ingressive" />
      </div>
    </footer>
  );
};

export default Footer;
