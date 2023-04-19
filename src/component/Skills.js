import React, { useContext, useEffect, useRef, useState } from 'react'
import { AppC } from '../context/MyContect';
import '../styles/skills.scss'

function Skills() {
  const {dummy} = useContext(AppC)
  const value = Object.values(dummy.skill);
  const concatValue = value[0].concat(value[1],value[2])
  const bounce = useRef(null);
  const [skill, setSkill] = useState({
    name:dummy.skill.skills[0].name,
    detail:dummy.skill.skills[0].detail
  });
  let idx;
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
    skillsSecond[0].classList.remove("abc");
    skillsSecond[0].style.opacity = `0`;
    skillsDetail[0].classList.remove("abc");
    skillsDetail[0].style.opacity = `0`;
    setTimeout(()=> {
      skillsSecond[0].classList.add("abc");
      skillsSecond[0].style.opacity = `1`;
      skillsDetail[0].classList.add("abc");
      skillsDetail[0].style.opacity = `1`;
    },100);
    clearTimeout();
  };
  //3초뒤 바운스 효과 재시작
  function restart () {
    setTimeout(() => {
      clearInterval(bounce.current);
      animai();
    }, 4000);
  };
  //class 없앰
  function deleteClass (idx) {

    const elList = [...effectFirst, ...effectSecond, ...effectThird];

    switch (idx.type) {
      case "always" : 
      idx.idx.classList.remove("bounce"); break;
      case "click" :
        elList.forEach(s=>{
          s.classList.remove("bounce");
        });
        break;
    }

  }
  //animai 멈춤
  function stopAnimai () {
    clearInterval(bounce.current);
    idx = undefined;
  };
  //각 li 클릭 시 이벤트 컨트롤
  function allEvent (e) {
    //전에 작동하던 애니메이션 클래스 없애기
    deleteClass({type:"click"})
    //대표 글씨 출력
    ani();
    //바운스 애니메이션
    bounceAni(e);
    //전에 작동하던 animai 멈춤
    stopAnimai();
    //재시작
    restart();
  }
  
  //////////클릭 이벤트들
  const skills = (key, e) => {
    setSkill({
      name:dummy.skill.skills[key].name,
      detail:dummy.skill.skills[key].detail
    });
    allEvent(e);
  };
  const deploy = (key, e) => {
    setSkill({
      name:dummy.skill.deploy[key].name,
      detail:dummy.skill.deploy[key].detail
    });
    allEvent(e);
  };
  const tools = (key, e) => {
    setSkill({
      name:dummy.skill.tools[key].name,
      detail:dummy.skill.tools[key].detail
    });
    allEvent(e);
  };
  ///////////
  
  /////바운스 효과
  function animai () {
    bounce.current = setInterval(()=> {
      //각각의 li
      const elList = [...effectFirst, ...effectSecond, ...effectThird];    
      //각 이미지 태그 잡은 랜덤 변수 
      const num = Math.floor(Math.random() * elList.length);
      //elList 키값 반환
      const check = Object.keys(elList);
      //먼저 넣어야함
      //idx에 값이 있을 경우 클래스 없애는 함수
      if (idx) {
        deleteClass({idx, type:"always"})
        if (idx.classList == elList[num].classList) {
          const abc = check.filter((obj)=> obj !== num);
          const num1 = Math.floor(Math.random() * abc.length);
          idx = elList[num1];
          setSkill({
            name: concatValue[num1].name,
            detail: concatValue[num1].detail
          })
        } else {
          idx = elList[num];
          setSkill({
            name: concatValue[num].name,
            detail: concatValue[num].detail
          })
        }
      }else {
        idx = elList[num]
        setSkill({
          name: concatValue[num].name,
          detail: concatValue[num].detail
        })
      }
      //바운스 효과가 들어간 태그 출력
      ani();
      idx.classList.add("bounce");
    }, 3000);
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
                  return <li  key={key} className="effectFirst">
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