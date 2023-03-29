import React, { useState } from 'react'
import '../styles/header.scss'

function Header() {
  const [check, setCheck] = useState(false);

  return (
    <header className="header">
      <div className="header-first">
        <img src='./img/open.svg' />
      </div>
      <span className="header-second">
        <p>HOME</p>
      </span>
      <span className="header-third">
        <p>Contact</p>
      </span>
    </header>
  )
}

export default Header