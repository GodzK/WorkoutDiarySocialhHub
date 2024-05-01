import React, { useState } from "react";
import "./Navitem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navitem(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <a href="#" onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={props.icon} />
      </a>
      {isOpen && props.children}
    </>
  );
}

export default Navitem;
