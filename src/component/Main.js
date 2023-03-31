import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/main.scss'
import Header from './Header'

function Main() {
  return (
    <>
    {/* <Header /> */}
    <main>
      <div className="main-wrap">
        <div className="main-txt">
          <h1> PORTFOLIO</h1>
          <h1>JUMPJOONG</h1>
        </div>
        <div className="main-box">
          <div className="PROFILE box">
            <p className="box-txt">Profile</p>
            <div className="event1 text">
              <p>Front-End</p>
              <p>개발자가 되고 싶은</p>
              <p>김현중입니다.</p>
            </div>
            <Link className="event1" to={"/profile"}>Learn More</Link>
          </div>
          <div className="Skills box">
            <p className="box-txt">Skills</p>
            <div className="event1 text">
              <p>Introducing My Skills</p>
            </div>
            <Link className="event1" to={"/skills"}>Learn More</Link>
          </div>
          <div className="Project box">
            <p className="box-txt">Projects</p>
            <div className="event1 text">
              <p>Introducing my project</p>
              <p>Which I lacked but worked hard on.</p>
            </div>
            <Link className="event1" to={"/project"}>Learn More</Link>
          </div>
          <div className="Contact box">
            <p className="box-txt">Contact</p>
            <div className="event1 text">
              <p>I will give you my contact information</p>
            </div>
            <Link className="event1" to={"/contact"}>Learn More</Link>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

export default Main