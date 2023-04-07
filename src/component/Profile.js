import React from 'react'
import '../styles/profile.scss'

function Profile() {
  return (
    <div className="profile">
      <div className="profile-wrap">
        <div className="first">
          <figure>
            <div>
              <img src="./img/music.jpg" alt="무식은나의삶이다"/>
            </div>
            <figcaption>
              <p>설명글 영역</p>
            </figcaption>
          </figure>
        </div>
        <div className="second">
          <div className="time-line">
            <p>타임라인</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile