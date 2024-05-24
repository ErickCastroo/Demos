import React from "react";
import logo from '../../../assets/img/si.png'
import "../main.css";

function Logo() {
  return (
    <div className="logo">
      <div className="logo-icon">
      <img src={logo} alt="" />
      </div>
    </div>
  );
}

export { Logo };
