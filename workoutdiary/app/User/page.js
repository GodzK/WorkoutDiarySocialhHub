"use client"
import Nav from '@/components/Nav/Nav'
import './Upro.css'
import Image from 'next/image'
import blackbg from "./blackbg.png"
import usericon from "./usericon.png"
import NavItem from "@/components/NavItem/Navitem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import {
  faBell,
  faChevronCircleDown,
  faComment,
  faDumbbell,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from "react-transition-group";
import DropdownMenu from "@/components/DropdownMenu/DropdownMenu";
import ChatDropdown from "@/components/DropdownChat/ChatDropdown";
import Noti from "@/components/Notification/Noti"

function Upro() {
  return (
    <div>
       <Nav>
        <NavItem>
         
          <ChatDropdown>
          </ChatDropdown>
          <DropdownMenu>
          </DropdownMenu>
         </NavItem>
        </Nav>
      <div>
      <h1 style={{color:"black"}}> Hi there</h1>
       <h1 style={{color:"black"}}> Hi there</h1>
       <h1 style={{color:"black"}}> Hi there</h1>
        </div>

  <div className='profile-container'>
  <div className='profile'>
    <div className='profile-header'>
      <div className='profile-pic'>
  <Image src={usericon}/>
      </div>
      <h1>Phakaphol Dherachaisuphakij</h1>
      <p>Front-end Blogger/Author/Front-end Developer from King Mongkut's University of Technology Thonburi (KMUTT)</p>
    </div>
    
    
    </div>
  </div>
</div>
  )
}

export default Upro