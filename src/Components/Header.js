import { useEffect, useState } from "react";
import "./Header.css";
import logo from "../Assets/clock.png";

export const Header = () => {
 
  return (
    <header className="Header">
        <span>
            <img className="img" src={logo} alt="Clock Image"/>
            <span>Things To Do</span>
        </span>
    </header>
  )
}
