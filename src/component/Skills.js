import React, { useContext, useEffect, useRef, useState } from 'react'
import { AppC } from '../context/MyContect';
import '../styles/skills.scss'

function Skills() {
  const {dummy} = useContext(AppC)
  const [tag, setTag] = useState(null);
  const value = Object.values(dummy.skill);
  const bounce = useRef(null);
  const [skill, setSkill] = useState({
    name:dummy.skill.skills[0].name,
    detail:dummy.skill.skills[0].detail
  });
  //이펙트 태그
  const effectFirst = document.getElementsByClassName("effectFirst");
  const effectSecond = document.getElementsByClassName("effectSecond");
  const effectThird = document.getElementsByClassName("effectThird");
  const skillsSecond = document.getElementsByClassName("name");
  const skillsDetail = document.getElementsByClassName("detail");
  //글씨 이펙트 부분
  useEffect(()=> {
    skillsSecond[0].classList.add("abc");
    skillsDetail[0].classList.add("abc");
    setTimeout(()=> {
      for (let i = 0; effectFirst.length > i; i++) {
        effectFirst[i].classList.add("move");
      };
      setTimeout(()=> {
        for (let i = 0; effectSecond.length > i; i++) {
          effectSecond[i].classList.add("move");
        };
        setTimeout(()=> {
          for (let i = 0; effectThird.length > i; i++) {
            effectThird[i].classList.add("move");
          };
        }, 300);
      }, 300);
    },150);
    clearTimeout();
    animai();
    return () => {
      console.log("실행되나?", stopAnimai());
      stopAnimai();
    };
    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  //클릭 이벤트의 바운스 애니메이션
  function bounceAni (e)  {
    e.target.parentNode.classList.add("bounce");
    setTimeout(()=> {
      e.target.parentNode.classList.remove("bounce");
    }, 3000);
  };
  //대표 글씨 출력하는 부분 애니메이션
  function ani () {
    skillsSecond[0].classList.remove("abc")
    skillsSecond[0].style.opacity = `0`
    skillsDetail[0].classList.remove("abc")
    skillsDetail[0].style.opacity = `0`
    setTimeout(()=> {
      skillsSecond[0].classList.add("abc")
      skillsSecond[0].style.opacity = `1`
      skillsDetail[0].classList.add("abc")
      skillsDetail[0].style.opacity = `1`
    },100);
    clearTimeout();
  };
  //5초뒤 바운스 효과 재시작
  let sum
  function restart () {
    sum = setTimeout(() => {
      clearInterval(bounce.current);
      animai();
    }, 4000);
  };
  //restart 멈춤
  function stopRestart () {
    clearTimeout(sum);
  }
  //animai 멈춤
  function stopAnimai () {
    if (tag) {
      tag.remove("bounce");
    };
    clearInterval(bounce.current);
    idx = undefined;
  };
  //////////클릭 이벤트들
  const skills = (key, e) => {
    setSkill({
      name:dummy.skill.skills[key].name,
      detail:dummy.skill.skills[key].detail
    });
    ani();
    bounceAni(e);
    stopAnimai();
    stopRestart();
    restart();
  };
  const deploy = (key, e) => {
    setSkill({
      name:dummy.skill.deploy[key].name,
      detail:dummy.skill.deploy[key].detail
    });
    ani();
    bounceAni(e);
    stopAnimai();
    stopRestart();
    restart();
  };
  const tools = (key, e) => {
    setSkill({
      name:dummy.skill.tools[key].name,
      detail:dummy.skill.tools[key].detail
    })
    ani();
    bounceAni(e);
    stopAnimai();
    stopRestart();
    restart();
  };
  ///////////

  /////바운스 효과
  let idx;

  function animai () {
    bounce.current = setInterval(()=> {
      const ran = [effectFirst, effectSecond, effectThird];
      //각 이미지 태그 잡은 랜덤 변수 
      const num = Math.floor(Math.random() * ran.length);
      //num의 지정된 배열의 랜덤 길이
      const num1 = Math.floor(Math.random() * ran[num].length);
      //idx에 값이 있을 경우 클래스 없애는 함수
      if (idx) {
        idx.remove("bounce");
      }
      
      idx = ran[num][num1].classList;
      if (idx) {
        setTag(idx)
      }
      //바운스 효과가 들어간 태그 출력
      setSkill({
        name: value[num][num1].name,
        detail: value[num][num1].detail
      })
      ani();
      idx.add("bounce");
    }, 4000);
  }
  
  return (
    <div className="skills">
      <div className="skills-view">
        <div className="skills-first">
          <h4>MY SKILLS</h4>
        </div>
        <div className="skills-second">
          <p className="name">{skill.name}</p>
          <p className="detail">{skill.detail}</p>
        </div>
        <div className="skills-list">
          <div className="front">
            <p># SKILLS</p>
            <ul>
              {
                dummy.skill.skills.map((obj, key)=> {
                  return <li key={key} className="effectFirst">
                    <img src={`${obj.img}`} alt="사진" onClick={(e)=>skills(key, e)}/>
                  </li>
                })
              }
            </ul>
          </div>
          <div className="deploy">
          <p># DEPLOY</p>
          <ul>
            {
                dummy.skill.deploy.map((obj, key)=> {
                  return <li key={key} className="effectSecond">
                    <img src={`${obj.img}`} alt="사진" onClick={(e)=>deploy(key, e)}/>
                  </li>
                })
            }
          </ul>
          </div>
          <div className="tools">
            <p># USING TOOLS</p>
            <ul>
              {
                dummy.skill.tools.map((obj, key)=> {
                  return <li key={key} className="effectThird">
                    <img src={`${obj.img}`} alt="사진" onClick={(e)=>tools(key, e)}/>
                  </li>
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills