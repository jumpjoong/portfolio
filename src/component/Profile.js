import React from 'react'
import '../styles/profile.scss'

function Profile() {
  return (
    <div className="profile">
      <div className="profile-write">
        <div className="introduce">
          <h2>Introduce</h2>
          <h2>my self and my</h2>
          <h2>info</h2>
        </div>
        <div className="detail">
          <p>새로운 기술을 배우는 것에 두려움이 없고 꾸준함과 성실함을 중요하게 생각합니다.</p>
          <p>항상 초심을 잃지 않고 꾸준하게 성장할 자신이 있습니다.</p>
          <p>성실하고 꾸준한 개발자가 되고 싶은 김현중입니다. </p>
        </div>
        <div className="resume">
          <p>이력서 다운로드</p>
        </div>
      </div>
      <div className="my-img">
        <div className="img-wrap">
          <img src="./img/.jpg" alt="사진" />
        </div>  
        <div className="my-contact">
          <div className="name">
            <p>NAME</p>
            <p>KIM HYUN JOONG</p>
          </div>
          <div className="phone">
            <p>PHONE</p>
            <p>+82 10-8844-0196</p>
          </div>
          <div className="email">
            <p>EMAIL</p>
            <p>khj0196@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile