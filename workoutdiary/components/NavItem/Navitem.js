"use client"
import "./Navitem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import {
  faBell,
  faChevronCircleDown,
  faComment,
  faDumbbell,
  faHome,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import ChatDropdown from "../DropdownChat/ChatDropdown";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import Noti from "../Notification/Noti";
import Link from "next/link";
function Navitem() {
  const [isOpen, setIsOpen] = useState(false);
  const [isChat, setChat] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(""); // New state variable

  const handleDropdownClick = (dropdownName) => {
    if (dropdownName === activeDropdown) {
      setActiveDropdown(""); 
    } else {
      setActiveDropdown(dropdownName); 
    }
  };

  return (
    <>
 <a href="#" onClick={() => { window.location.href = '/'; }}>
  <FontAwesomeIcon icon={faHome} />
</a>
      <a href="#" onClick={() => handleDropdownClick("noti")}>
        <FontAwesomeIcon icon={faBell} />
      </a>
      <a href="#" onClick={() => handleDropdownClick("chat")}>
        <FontAwesomeIcon icon={faComment} />
      </a>
      <a href="#" onClick={() => handleDropdownClick("menu")}>
        <FontAwesomeIcon icon={faChevronCircleDown} />
      </a>

      {isChat && <ChatDropdown />}
      {activeDropdown === "Home" && <ChatDropdown />}
      {activeDropdown === "chat" && <ChatDropdown />}
      {activeDropdown === "menu" && <DropdownMenu />}
      {activeDropdown === "noti" && <Noti />}
    </>
  );
}

export default Navitem;