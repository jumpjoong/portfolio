import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/main.scss'

function Main() {
  return (
    <main>
      <div className="main-wrap">
        <div className="main-txt">
          <h1> PORTFOLIO</h1>
          <h1>JUMPJOONG</h1>
        </div>
        <div className="main-box">
          <div className="PROFILE box">
            <p className="box-txt">Profile</p>
            <div className="event1 text">설명</div>
            <Link className="event1 text" to={"/profile"}>런 모어</Link>
          </div>
          <div className="Skills box">
            <p className="box-txt">Skills</p>
            <div className="event2 text">설명</div>
            <Link className="event1 text" to={"/skills"}>런 모어</Link>
          </div>
          <div className="Project box">
            <p className="box-txt">Projects</p>
            <div className="event3 text">설명</div>
            <Link className="event1 text" to={"/project"}>런 모어</Link>
          </div>
          <div className="Contact box">
            <p className="box-txt">Contact</p>
            <div className="event4 text">설명</div>
            <Link className="event1 text" to={"/contact"}>런 모어</Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main