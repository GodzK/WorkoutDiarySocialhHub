import React from 'react'
import './nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faChevronCircleDown, faComment, faDumbbell, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
function Nav() {
  return (
  <header className='header'>
    <a className='logo'>
    <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>workout diary
    </a>
    <nav className='navbar'>
      <a href=""><FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon></a>
       <a href=""><FontAwesomeIcon icon={faBell}></FontAwesomeIcon></a>
      <a><FontAwesomeIcon icon={faComment}></FontAwesomeIcon></a> 
      <a href=""><FontAwesomeIcon icon={faChevronCircleDown}></FontAwesomeIcon></a> 
    </nav>
    </header>
  )
}

export default Nav