import React from "react";
import logo from '../investment-calculator-logo.png';
export default function Header(){
  return (
    <div className="header">
     <img src={logo} alt="logo" />
      <h1>Investment Calculator</h1>
    </div>
  );
}
