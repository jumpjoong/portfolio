import React from 'react'
import { BrowserRouter, Link, Navigate, useNavigate } from 'react-router-dom'
import '../styles/main.scss'

function Main() {
  const navigate = useNavigate()
  const profile = (type) => {
    // navigate("/profile");
    switch(type) {
      case "profile" :
        return navigate("/profile");
      case "skill" :
        return navigate("/skills")
      case "project" :
        return navigate("/project")
      case "contact" :
        return navigate("/contact")
    }
  }
  return (
    <>
    <main>
      <div className="main-wrap">
        <div className="main-txt">
          <h1> PORTFOLIO</h1>
          <h1>JUMPJOONG</h1>
        </div>
        <div className="main-box">
          <div className="PROFILE box"  onClick={()=>profile("profile")}>
            <p className="box-txt">Profile</p>
            <div className="event1 text" >
              <p>Front-End</p>
              <p>개발자가 되고 싶은</p>
              <p>김현중입니다.</p>
            </div>
            <Link className="event1" to={"/profile"}>Learn More</Link>
          </div>
          <div className="Skills box" onClick={()=>profile("skill")}>
            <p className="box-txt">Skills</p>
            <div className="event1 text">
              <p>Introducing My Skills</p>
            </div>
            <Link className="event1" to={"/skills"}>Learn More</Link>
          </div>
          <div className="Project box" onClick={()=>profile("project")}>
            <p className="box-txt">Projects</p>
            <div className="event1 text">
              <p>Introducing my project</p>
              <p>Which I lacked but worked hard on.</p>
            </div>
            <Link className="event1" to={"/project"}>Learn More</Link>
          </div>
          <div className="Contact box" onClick={()=>profile("contact")}>
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