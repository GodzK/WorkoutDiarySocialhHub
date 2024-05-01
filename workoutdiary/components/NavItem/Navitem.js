"use client"
import "./Navitem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import {
  faBell,
  faChevronCircleDown,
  faComment,
  faDumbbell,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import ChatDropdown from "../DropdownChat/ChatDropdown";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
function Navitem() {
  const [isOpen, setIsOpen] = useState(false);
  const [isChat, setChat] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(""); // New state variable

  const handleDropdownClick = (dropdownName) => {
    if (dropdownName === activeDropdown) {
      setActiveDropdown(""); // Close the currently open dropdown
    } else {
      setActiveDropdown(dropdownName); // Open the clicked dropdown
    }
  };

  return (
    <>
      <a href="#" onClick={() => handleDropdownClick("chat")}>
        <FontAwesomeIcon icon={faPlusCircle} />
      </a>
      <a href="#" onClick={() => handleDropdownClick("chat")}>
        <FontAwesomeIcon icon={faBell} />
      </a>
      <a href="#" onClick={() => handleDropdownClick("chat")}>
        <FontAwesomeIcon icon={faComment} />
      </a>
      <a href="#" onClick={() => handleDropdownClick("menu")}>
        <FontAwesomeIcon icon={faChevronCircleDown} />
      </a>

      {isChat && <ChatDropdown />}
      {activeDropdown === "chat" && <ChatDropdown />}
      {activeDropdown === "menu" && <DropdownMenu />}
    </>
  );
}

export default Navitem;