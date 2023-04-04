import React, { useEffect, useRef, useState } from 'react'
import '../styles/project.scss'
function Project() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScrollPosition, setMaxScrollPosition] = useState(0);
  const scrollContainerRef = useRef(null);

  useEffect(()=> {
    const scrollContainer = scrollContainerRef.current;
    const maxScrollWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    setMaxScrollPosition(maxScrollWidth);
  },[])

  const handleScroll = (e) => {
    if (scrollPosition < 0 ){
      return setScrollPosition(0);
    }else if (scrollPosition > maxScrollPosition){
      return setScrollPosition(maxScrollPosition);
    }else {
      const delta = e.deltaY;
      const container = e.target;
      const moveCon = scrollPosition + delta;
  
      container.scrollLeft = moveCon;
      setScrollPosition(moveCon);
    }
  };

  return (
    <div className="project">
      <h2>영어로 쌸라쌸라 </h2>
      <div className="horizontal-scroll" onWheel={handleScroll} ref={scrollContainerRef}>
        <div className="first">  
          <figure>
            <p>로아 프로젝트 이미지 클릭하면 이동(배포 사이트)</p>
            <figcaption>
              <p>로아 프로젝트 이름</p>
              <p>사용기술</p>
              <p>api를 이용한 설명</p>
            </figcaption>
          </figure>
        </div>
        <div className="second">
          <figure>
            <p>팀플 프로젝트 이미지 클릭하면 이동(배포 사이트)</p>
            <figcaption>
              <p>팀플 프로젝트 이름</p>
              <p>사용기술</p>
              <p>api를 이용한 설명</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  )
}

export default Project