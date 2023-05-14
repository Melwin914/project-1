import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header className='header'>
      <Link to='/' style={{ textDecoration: 'none', color: '#fff' }}>
        <h1>TrudoSYS Developers</h1>
      </Link>
    </header>
  )
}

export default Header