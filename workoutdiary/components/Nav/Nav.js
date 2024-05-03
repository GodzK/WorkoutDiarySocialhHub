import React from "react";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faChevronCircleDown,
  faComment,
  faDumbbell,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";

function Nav(props) {
  return (
    <header className="header">
      <div href="#" onClick={() => { window.location.href = '/'; }}>
         <a className="logo">
        <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
       workout diary
      </a>
      </div>
     
      <nav className="navbar">
        {props.children}
      </nav>
    </header>
  );
}

export default Nav;
