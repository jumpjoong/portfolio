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
        <p>아이콘에 마우스를 올리면 정보가 나옵니다!</p>
      </div>
      <div className="skills-wrap">
        <div className="front-skills">
          <p># FRONT-END SKILLS</p>
          <div className="skill-box">
            <ul>
              <li>
                <figure>
                  <img src="./img/html5.svg" alt="html5 아이콘" />
                  <figcaption>
                      <p>HTML5</p>
                      <p>기본적인 태그를 이해하고 있으며 시멘틱태그를 사용해 마크업이 가능합니다.</p>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img src="./img/css3.svg" alt="css3 아이콘" />
                  <figcaption>
                    <p>CSS3</p>
                    <p>position, display를 적절하게 사용하며 이벤트 사용이 가능합니다.</p>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img src="./img/sass.svg" alt="sass 아이콘" />
                  <figcaption>
                    <p>SCSS</p>
                    <p>CSS3 보다 더 많이 사용했고 구조 파악이 가능합니다.</p>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img src="./img/javascript_icon_130900.svg" alt="javascript 아이콘" />
                  <figcaption>
                    <p>JavaScript(ES6)</p>
                    <p>변수 선언에 대해 이해하고 있으며 다양한 event 추가가 가능합니다.</p>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img src="./img/react.svg" alt="react 아이콘" />
                  <figcaption>
                    <p>React.js</p>
                    <p>다양한 Custum hook이 가능하고 CSR에 대해 이해하고 있습니다</p>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img src="./img/nextjs.svg" alt="next 아이콘" />
                  <figcaption>
                    <p>Next.js</p>
                    <p>DB와 연결을 할 줄 알고 SSR에 대해 이해하고 있습니다.</p>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img src="./img/vueicon.svg" alt="vue 아이콘" />
                  <figcaption>
                    <p>Vue.js</p>
                    <p>생태계가 작다보니 정보가 적지만 경험을 해봤습니다.</p>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img src="./img/nuxticon.svg" alt="nuxt 아이콘" />
                  <figcaption>
                    <p>Nuxt.js</p>
                    <p>SSR에 대해 이해하고 있고 경험을 해봤습니다. </p>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </div>
        </div>
        <div className="deploy">
          <p># DEPLOY</p>
          <div className="deploy-box">
            <ul>
              <li>
                <figure>
                  <img src="./img/vercelicon.svg" alt="vercelicon  아이콘"/>
                  <figcaption>
                    <p>Vercel</p>
                    <p>다양한 라이브러리로 배포한 경험이 있습니다.</p>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img src="./img/abc.svg" alt="dothome 아이콘"/>
                  <figcaption>
                    <p>Dot Home</p>
                    <p>File Zilla 를 통한 배포한 경험이 있습니다.</p>
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
                  <img src="./img/vscode.svg" alt="vscode 아이콘"/>
                  <figcaption>
                    <p>VS CODE</p>
                    <p>자주 사용하는 툴이며 터미널 사용법을 알고 있습니다.</p>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img src="./img/giticon.svg" alt="깃허브 아이콘"/>
                  <figcaption>
                    <p>GitHub</p>
                    <p>branch관리가 가능하며 git 명령어 사용법을 알고있습니다.</p>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img src="./img/figmaicon.svg" alt="피그마 아이콘"/>
                  <figcaption>
                    <p>Figma</p>
                    <p>이미지 다운, 폰트 확인 등등 확인이 가능합니다.</p>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img src="./img/notionicon.svg" alt="노션 아이콘"/>
                  <figcaption>
                    <p>Notion</p>
                    <p>Notion을 통한 협업이 가능합니다.</p>
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