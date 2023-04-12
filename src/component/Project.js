import React, { useContext, useEffect } from "react";
import { AppC } from "../context/MyContect";
import "../styles/project.scss";
function Project() {
  const {dummy} = useContext(AppC);
  const body = document.getElementsByTagName("body");
  const a = document.getElementsByTagName("a");
  const home = document.getElementsByClassName("home");
  const header = document.getElementsByClassName("header");
  console.log(dummy.project)
  useEffect(()=> {
    body[0].style = `background-color: #424242`;
    a[0].style = `color: black`;
    home[0].style = `color: white`;
    header[0].style = `border-bottom: 1px solid #ffffffa4`;
    return ()=> {
      body[0].style = `background-color: #f6f6f6`;
      a[0].style = `color: black`;
      home[0].style = `color: black`;
      header[0].style = `border: none`;
    };
    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  return (
    <div className="project">
      <div className="project-h2">
        <h2>CONTENT</h2>
        <h2>CREATION: </h2>
        <h2>PROJECT</h2>
      </div>
      <div className="project-wrap">
        <div className="first">
          <div className="project-img">
            {
              dummy.project.map((obj, key) => {
                return <img src={`${obj.img}`} alt={`"${obj.alt}`} key={key} />
              })
            }
          </div>
        </div>
      </div>
      <div className="project-write">
        {
          dummy.project.map((obj, key) => {
            return <div key={key}>
            <p>USING SKILLS: {obj.usingSkill}</p>
            <p>PROJECT NAME: {obj.projectName}</p>
            </div>
          })
        }
        {/* <div className="project-detail">
          <p></p>
        </div> */}
      </div>
    </div>
  );
}

export default Project;
