import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faCogs,
  faUserCircle,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from "react-transition-group";
import Link from "next/link";
import "./ChatDropdown";
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
    <div className="dropdown-menu">
      <CSSTransition
        in={activeMenu === "page"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
      >
        <div className="menu">
        <Link href="/Chat" passHref>
  <div className="link-dropdown">
    <FontAwesomeIcon
      icon={faUserCircle}
      style={{ paddingRight: "0.3rem" }}
    ></FontAwesomeIcon>{" "}
    Friend1
  </div>
</Link>
          <DropdownItem href="">
            <Link href="" className="link-dropdown">
              <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon> Friend2
            </Link>
          </DropdownItem>
          <DropdownItem href="">
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
        classNames="menu-setting"
      ></CSSTransition>
    </div>
  );
}

export default ChatDropdown;
