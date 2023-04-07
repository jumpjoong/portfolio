import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/project.scss";
function Project() {
  const aaa = document.getElementsByClassName("project-wrap");
  let screenWidth = document.body.offsetWidth;

  function projectWheel(e) {
    console.log('Run Event');
    if (aaa[0] === undefined || aaa[0] === null) {
      return;
    } else {
      try {
        if (e.deltaY < 0) {
          aaa[0].style = `transform: translate(-${Number(0) * screenWidth}px, -50%);`;
        } else {
          aaa[0].style = `transform: translate(-${Number(1) * screenWidth}px, -50%);`;
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  useEffect(() => {
    function aa() {
      window.addEventListener("wheel", projectWheel);
    }
    aa();
    return ()=>{ window.removeEventListener('wheel', projectWheel)}
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="project">
      <div className="project-h2">
        <h2>CONTENT</h2>
        <h2>CREATION: OUR</h2>
        <h2>PROJECTS</h2>
      </div>
      <div className="project-wrap">
        <div className="first">
          <figure>
            <div>
              <img src="./img/lostArk.png" alt="로스트 아크" />
              <div>
                <div className="dev-date">
                  <p>개발 기간</p>
                  <p>2023.02.01 ~ 2023.02.10</p>
                </div>
                <div className="web">
                  <Link to="http://khj0196.dothome.co.kr" target="_blank">
                    🚀Web View
                  </Link>
                  <Link
                    to="https://github.com/jumpjoong/lostArk"
                    target="_blank"
                  >
                    💻GITHUB
                  </Link>
                </div>
              </div>
            </div>
            <figcaption>
              <ul>
                <li>
                  <p>Project Name</p>
                  <p>로스트 아크 캐릭터 검색</p>
                </li>
                <li>
                  <p>Skills</p>
                  <p>React.js, SCSS, Rest API</p>
                </li>
                <li>
                  <p>Detail</p>
                  <p>api를 이용한 설명</p>
                </li>
                <li>
                  <p>Issue</p>
                  <p>이슈사항</p>
                </li>
              </ul>
            </figcaption>
          </figure>
        </div>
        <div className="second">
          <figure>
            <div>
              <img src="./img/team.png" alt="팀 프로젝트" />
              <div>
                <div className="dev-date">
                  <p>개발 기간</p>
                  <p>2023.02.23 ~ 2023.03.16</p>
                </div>
                <div className="web">
                  <Link
                    to="https://poketmon-sns-nv1u.vercel.app/"
                    target="_blank"
                  >
                    🚀Web View
                  </Link>
                  <Link
                    to="https://github.com/jumpjoong/poketmonSNS"
                    target="_blank"
                  >
                    💻GITHUB
                  </Link>
                </div>
              </div>
            </div>
            <figcaption>
              <ul>
                <li>
                  <p>Project Name</p>
                  <p>PoketMonSNS</p>
                </li>
                <li>
                  <p>Skills</p>
                  <p>Next.js, SCSS, Next Auth, Prisma, MySQL, Chart.js</p>
                </li>
                <li>
                  <p>Detail</p>
                  <p>api를 이용한 설명</p>
                </li>
                <li>
                  <p>Issue</p>
                  <p>이슈사항</p>
                </li>
              </ul>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Project;
