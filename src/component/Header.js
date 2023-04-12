import React, { useContext } from "react";
import { AppC } from "../context/MyContect";
import "../styles/header.scss";
import { Link } from "react-router-dom";
import openImg from "../images/open.svg"
import closeImg from "../images/close.svg"

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
        <img src={openImg} alt="버거메뉴"  onClick={reverse} />
        <div className={aaa ? "burger on" : "burger"}>
          <ul>
            <li><img src={closeImg} alt="버거메뉴"/></li>
            <li>
              <Link to={"/profile"}>Profile</Link>
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
        <Link to="/" className="home">HOME</Link>
      </span>
      <span className="header-third">
      </span>
    </header>
  );
}

export default Header;
