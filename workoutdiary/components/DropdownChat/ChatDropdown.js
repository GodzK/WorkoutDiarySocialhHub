import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faCogs,
  faImage,
  faPlusCircle,
  faThumbsUp,
  faUserCircle,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from "react-transition-group";
import Link from "next/link";
import "./Chatpage.css";
import { useState } from "react";


function ChatDropdown() {
  const [activeMenu, setActiveMenu] = useState("page");
  function DropdownItem(props) {
    return (
      <div
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
        style={{ backgroundColor: "black" }}
      >
        {props.children}
      </div>
    );
  }
  return (
    <div className="Chat-container">
      <CSSTransition
        in={activeMenu === "page"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
      >
        <div className="menu">
        <DropdownItem goToMenu="Chat">
            <Link href="" className="link-dropdown">
              <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon> Friend1
            </Link>
          </DropdownItem>
          <DropdownItem goToMenu="Chat">
            <Link href="" className="link-dropdown">
              <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon> Friend2
            </Link>
          </DropdownItem>
          <DropdownItem goToMenu="Chat">
            <Link href="" className="link-dropdown">
              <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon> Friend3
            </Link>
          </DropdownItem>
          <DropdownItem goToMenu="Chat">
            <Link href="" className="link-dropdown">
              <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon> Friend4
            </Link>
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "Chat"}
        unmountOnExit
        timeout={500}
      >
        <div className="long">
        <DropdownItem goToMenu="page">
            <Link href="" className="link-dropdown">
              <FontAwesomeIcon
                icon={faArrowAltCircleLeft}
                style={{ paddingRight: "0.3rem" }}
              ></FontAwesomeIcon>{" "}
              get back
            </Link>
          
          </DropdownItem> 
          <div className="column-container">
  <div className="h2-item">
    <FontAwesomeIcon icon={faUserCircle} className="user-icon"></FontAwesomeIcon>
    <h2>You Want to enroll the fitness course</h2>
  </div>
  <div className="h2-item">
    <FontAwesomeIcon icon={faUserCircle} className="user-icon"></FontAwesomeIcon>
    <h2>You Want to enroll the fitness course</h2>
  </div>
  <div className="h2-item">
    <FontAwesomeIcon icon={faUserCircle} className="user-icon"></FontAwesomeIcon>
    <h2>You Want to enroll the fitness course</h2>
  </div>
  <div className="h2-item">
    <FontAwesomeIcon icon={faUserCircle} className="user-icon"></FontAwesomeIcon>
    <h2>You Want to enroll the fitness course</h2>
  </div>
</div>
<div className="user-type">
<FontAwesomeIcon icon={faPlusCircle} className="user-icon"></FontAwesomeIcon><FontAwesomeIcon icon={faImage} className="user-icon"></FontAwesomeIcon><input type="text" placeholder="Type Something"/><FontAwesomeIcon icon={faThumbsUp} className="user-icon"></FontAwesomeIcon>
</div>
        </div>
      </CSSTransition>
    </div>
  );
}

export default ChatDropdown;
