"use client"

import Image from "next/image";
import Nav from "@/components/Nav/Nav"
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
import usericon from "./usericon.png"
import Post from "@/components/Post/Post"
import postData from './post.json';
import Link from "next/link";
import Postway from "@/components/Postway/postway"
export default function Home({post}) {  
  const [open , setOpen] = useState();
  return (
  
    <div className="main-container">
      <Nav>
        <NavItem>
          <ChatDropdown />
          <DropdownMenu />
        </NavItem>
      </Nav>
      <div className="rc"></div>
      <div className="App">
       <Postway/>
        {postData.map((post, index) => (
          <Post
            key={index}
            user={post.user}
            content={post.content}
            image={post.image}
            likes={post.likes}
            comments={post.comments}
            shares={post.shares}
          />
        ))}
      </div>
    </div>
  );
}