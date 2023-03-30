import React, { useContext } from "react";
import { AppC } from "../context/MyContect";
import "../styles/header.scss";

function Header() {
  const { reverse, value } = useContext(AppC);
  return (
    <header className="header">
      <div className="header-first" onClick={reverse}>
        <img src="./img/open.svg" alt="버거메뉴" />
        <div className={value ? "burger on" : "burger"}>
          <ul>
            <li><img src="./img/close.svg" alt="버거메뉴"/></li>
            <li>test2</li>
          </ul>
        </div>
      </div>
      <span className="header-second">
        <p>HOME</p>
      </span>
      <span className="header-third">
        <p>Contact</p>
      </span>
    </header>
  );
}

export default Header;
