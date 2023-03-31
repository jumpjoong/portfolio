import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/contact.scss'

function Contact() {

  return (
    <div className="contact">
      <div className="contact-wrap">
        <figure>
          <img src="./img/contact.jpg" alt="사진"/>
        </figure>
        <div className="info-wrap">
          <div className="info-cap">
            <h2>CONTACT</h2>
          </div>
          <div className="info email">
            <p>Email</p>
            <p>khj0196@naver.com</p>
          </div>
          <div className="info notion">
            <p>노션</p>
            <div>
              <Link to="https://reliable-tango-43c.notion.site/jumpjoong-6e76aeaa05ea40ae91b071800a4b282c" target='_blank'>https://notion.so/jumpjoong</Link>
            </div>
          </div>
          <div className="info git">
            <p>깃허브</p>
            <div>
              <Link to="https://github.com/jumpjoong" target='_blank'>https://github.com/jumpjoong</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact