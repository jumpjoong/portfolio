import React, { useContext } from "react";
import { AppC } from "../context/MyContect";
import "../styles/header.scss";
import { Link } from "react-router-dom";

function Header() {
  const { reverse, aaa } = useContext(AppC);
  //Link 태그를 누를 떄도 reverse 가 실행되서 수정
  const check = (e) => {
    if (e.target.tagName === "IMG") {
      reverse()
    } else {
      return true
    }
  }
  return (
    <header className="header">
      <div className="header-first" onClick={(e)=>check(e)}>
        <img src="./img/open.svg" alt="버거메뉴"  onClick={reverse} />
        <div className={aaa ? "burger on" : "burger"}>
          <ul>
            <li><img src="./img/close.svg" alt="버거메뉴"/></li>
            <li>
              <Link to={"/profile"}>Project</Link>
            </li>
            <li>
              <Link to={"/skills"}>Skills</Link>
            </li>
            <li>
              <Link to={"/project"}>Project</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <span className="header-second">
        <Link to="/">HOME</Link>
      </span>
      <span className="header-third">
        <p>Contact</p>
      </span>
    </header>
  );
}

export default Header;
