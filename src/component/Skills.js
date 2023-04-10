import React, { useEffect, useState } from 'react'
import '../styles/skills.scss'
import dummy from "../db/data.json"
function Skills() {
  const [skill, setSkill] = useState({
    name:dummy.skills[0].name,
    detail:dummy.skills[0].detail
  });
  //이펙트 태그
  const effectFirst = document.getElementsByClassName("effectFirst");
  const effectSecond = document.getElementsByClassName("effectSecond");
  const effectThird = document.getElementsByClassName("effectThird");
  const effectCount = document.getElementsByClassName("count");
  const skillsSecond = document.getElementsByClassName("name");
  //글씨 이펙트 부분
  useEffect(()=> {
    skillsSecond[0].classList.add("abc")
    setTimeout(()=> {
      for (let i = 0; effectFirst.length > i; i++) {
        effectFirst[i].classList.add("move")
        effectCount[0].classList.add("move")
      }
      setTimeout(()=> {
        for (let i = 0; effectSecond.length > i; i++) {
          effectSecond[i].classList.add("move")
          effectCount[1].classList.add("move")
        }
        setTimeout(()=> {
          for (let i = 0; effectThird.length > i; i++) {
            effectThird[i].classList.add("move")
            effectCount[2].classList.add("move")
          }
        }, 300) 
      }, 300)
    },150)
    clearTimeout()
    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const skills = (key) => {
    setSkill({
      name:dummy.skills[key].name,
      detail:dummy.skills[key].detail
    })
    ani()
  }
  const deploy = (key) => {
    setSkill({
      name:dummy.deploy[key].name,
      detail:dummy.deploy[key].detail
    })
    ani()
  }
  const tools = (key) => {
    setSkill({
      name:dummy.tools[key].name,
      detail:dummy.tools[key].detail
    })
    ani()
  }
  function ani () {
    skillsSecond[0].classList.remove("abc")
    skillsSecond[0].style.opacity = `0`
    setTimeout(()=> {
      skillsSecond[0].classList.add("abc")
      skillsSecond[0].style.opacity = `1`
    },100);
    clearTimeout()
  }
  return (
    <div className="skills">
      <div className="skills-view">
        <div className="skills-first">
          <h4>Detail</h4>
        </div>
        <div className="skills-second">
          <p className="name">{skill.name}</p>
          <p>{skill.detail}</p>
        </div>
        <div className="skills-list">
          <div className="front">
            <p># SKILLS</p>
            <ul>
              {
                dummy.skills.map((obj, key)=> {
                  return <li key={key} className="effectFirst">
                    <img src={`${obj.img}`} alt="사진" onClick={()=>skills(key)}/>
                  </li>
                })
              }
            </ul>
            <p className="count">+{dummy.skills.length}</p>
          </div>
          <div className="deploy">
          <p># DEPLOY</p>
          <ul>
            {
                dummy.deploy.map((obj, key)=> {
                  return <li key={key} className="effectSecond">
                    <img src={`${obj.img}`} alt="사진" onClick={()=>deploy(key)}/>
                  </li>
                })
            }
          </ul>
          <p className="count">+{dummy.deploy.length}</p>
          </div>
          <div className="tools">
            <p># USING TOOLS</p>
            <ul>
              {
                dummy.tools.map((obj, key)=> {
                  return <li key={key} className="effectThird">
                    <img src={`${obj.img}`} alt="사진" onClick={()=>tools(key)}/>
                  </li>
                })
              }
            </ul>
            <p className="count">+{dummy.tools.length}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills