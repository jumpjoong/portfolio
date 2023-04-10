import React, { useEffect } from "react";
import "../styles/project.scss";
function Project() {
  const body = document.getElementsByTagName("body");
  const p = document.getElementsByTagName("p");
  const a = document.getElementsByTagName("a");
  const home = document.getElementsByClassName("home");
  const header = document.getElementsByClassName("header");

  useEffect(()=> {
    body[0].style = `background-color: #424242`
    p[0].style = `color:  white`
    a[0].style = `color: black`
    home[0].style = `color: white`
    header[0].style = `border-bottom: 1px solid #ffffffa4`
    return ()=> {
      body[0].style = `background-color: #f6f6f6`
      p[0].style = `color: black`
      a[0].style = `color: black`
      home[0].style = `color: black`
      header[0].style = `border: none`
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className="project">
      <div className="project-h2">
        <h2>CONTENT</h2>
        <h2>CREATION: </h2>
        <h2>PROJECT</h2>
      </div>
      <div className="project-wrap">
        <div className="first">
          <div className="loa-img">
            <img src="./img/abc.png" alt="로아프로젝트" />
          </div>
        </div>
      </div>
      <div className="project-write">
        <div className="project-name">
          <p>USING SKILLS : React.js, SCSS, Rest API</p>
          <p>PROJECT NAME: 숙코검사기</p>
        </div>
        <div className="project-detail">
          <p>설명글</p>
          <p>설명글</p>
          <p>설명글</p>
          <p>설명글</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
