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
          <p>간단한 자기소개글</p>
        </div>
      </div>
      <div className="my-img">
        <div className="img-wrap">
          <img src="./img/music.jpg" alt="사진" />
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