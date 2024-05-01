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
          <DropdownItem>
            <Link href="" className="link-dropdown">
              <FontAwesomeIcon
                icon={faUserCircle}
                style={{ paddingRight: "0.3rem" }}
              ></FontAwesomeIcon>{" "}
              chat dropdown
            </Link>
          </DropdownItem>

          <DropdownItem goToMenu="settings">
            <Link href="" className="link-dropdown">
              <FontAwesomeIcon icon={faCogs}></FontAwesomeIcon> Settings
            </Link>
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-setting"
      >
        <div className="menu">
          <DropdownItem goToMenu="page">
            <Link href="" className="link-dropdown">
              <FontAwesomeIcon
                icon={faArrowAltCircleLeft}
                style={{ paddingRight: "0.3rem" }}
              ></FontAwesomeIcon>{" "}
              get back
            </Link>
          </DropdownItem>
          <DropdownItem goToMenu="settings">
            <Link href="" className="link-dropdown">
              <FontAwesomeIcon icon={faCogs}></FontAwesomeIcon> Language
            </Link>
          </DropdownItem>
          <DropdownItem goToMenu="settings">
            <Link href="" className="link-dropdown">
              <FontAwesomeIcon icon={faUserSecret}></FontAwesomeIcon> Privacy
            </Link>
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default ChatDropdown;
