import React, { useEffect, useState } from 'react'
import '../styles/skills.scss'
function Skills() {
  const [up, setUp] = useState(false);
  useEffect(()=> {
    setTimeout(()=> setUp(!up), 500)
    setTimeout(()=> setUp(up), 3000)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  console.log(up)
  return (
    <div className="skills">
      <div className={up ? "alert down" : "alert"} >
        <p>각 박스에 마우스를 올려보세요!</p>
      </div>
      <div className="skills-wrap">
        <div className="front-skills">
          <p># FRONT-END SKILLS</p>
          <div className="skill-box">
            <ul>
              <li>
                <figure>
                  <img src="./img/html5.svg" alt="html5" />
                  <figcaption>
                      <p>HTML5</p>
                      <p>디테일</p>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img src="./img/css3.svg" alt="css3" />
                  <figcaption>
                    <p>CSS3</p>
                    <p>디테일</p>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img src="./img/js.svg" alt="javascript" />
                  <figcaption>
                    <p>JavaScript(ES6)</p>
                    <p>디테일</p>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img src="./img/sass.svg" alt="sass" />
                  <figcaption>
                    <p>SCSS</p>
                    <p>디테일</p>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img src="./img/react.svg" alt="react" />
                  <figcaption>
                    <p>REACT</p>
                    <p>디테일</p>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img src="./img/next.svg" alt="next" />
                  <figcaption>
                    <p>NEXT</p>
                    <p>디테일</p>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </div>
        </div>
        <div className="using">
          <p># USING TOOL</p>
          <div className="using-box">
            <ul>
              <li>
                <figure>
                  <img src="./img/vscode.svg" alt="vscode"/>
                  <figcaption>
                    <p>VS CODE</p>
                    <p>디테일</p>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img src="./img/group.svg" alt="github"/>
                  <figcaption>
                    <p>GIT HUB</p>
                    <p>디테일</p>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills