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
  faCheck,
  faCheckCircle,
  faChevronCircleDown,
  faComment,
  faDumbbell,
  faIdBadge,
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
          <ChatDropdown></ChatDropdown>
          <DropdownMenu></DropdownMenu>
        </NavItem>
      </Nav>
      <div>
        <h1 style={{color:"black"}}> Hi there</h1>
        <h1 style={{color:"black"}}> Hi there</h1>
        <h1 style={{color:"black"}}> Hi there</h1>

      </div>

      <div className='profile-container' style={{paddingTop:"25rem"}}>
        <div className='profile'>
          <div className='profile-header'>
            <div className='profile-pic'>
              <Image src={usericon} alt="Profile Picture" />
            </div>
            <h1>Phakaphol Dherachaisuphakij <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon></h1> 
            <p>Front-end Blogger/Author/Front-end Developer from King Mongkut's University of Technology Thonburi (KMUTT)</p>
          </div>
          
          <div className="useful-content">
            <h2>Connect with me:</h2>
            <ul>
              <li>
                <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-square"></i> Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter-square"></i> Twitter
                </a>
              </li>
             
            </ul>
            <h2>Recent Posts:</h2>
            <ul>
              <li>
                <a href="link-to-recent-post-1">Recent Post 1</a>
              </li>
              <li>
                <a href="link-to-recent-post-2">Recent Post 2</a>
              </li>
        
            </ul>
          </div>

          <div className="extra-content">
            <div className="card">
              <h1 style={{fontSize:"1.5rem" , color:"black"}} >Photos</h1> 
              <div className="image-container">
                <Image src={usericon} width={100} height={100} alt="Image 1"/>
                <Image src={usericon} width={100} height={100} alt="Image 2"/>
                <Image src={usericon} width={100} height={100} alt="Image 3"/>
                <Image src={usericon} width={100} height={100} alt="Image 4"/>
                <Image src={usericon} width={100} height={100} alt="Image 5"/>
                <Image src={usericon} width={100} height={100} alt="Image 6"/>
                <Image src={usericon} width={100} height={100} alt="Image 7"/>
                <Image src={usericon} width={100} height={100} alt="Image 8"/>
                <Image src={usericon} width={100} height={100} alt="Image 9"/>
              </div>
            </div>
            <div className="card">
              <div className="intro">
                <h2 style={{color:"black"}}>Relationship Status : Single</h2>
                <p style={{color:"black"}}>Place: Bangkok, Thailand</p>
                <p style={{color:"black"}}>Edit Details <button>EDIT</button></p>
                <p style={{color:"black"}}>Featured: <button>Add Featured</button></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Upro;
