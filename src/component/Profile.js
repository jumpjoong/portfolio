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
          <p>NAME</p>
          <p>김현중</p>
          <p>CONTACT</p>
          <p>+82 10-8844-0196</p>
        </div>
      </div>
    </div>
  )
}

export default Profile