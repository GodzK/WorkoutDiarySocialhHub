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
export default function Home() {  
  const [open , setOpen] = useState();
  return (
  
       <div className="main-container">
       <Nav>
        <NavItem>
          <ChatDropdown>
          </ChatDropdown>
          <DropdownMenu>
          </DropdownMenu>
         </NavItem>
        </Nav>
       <h1>this is index</h1>  
       </div>
  );
}
