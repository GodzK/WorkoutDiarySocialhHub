"use client"
import classes from './page.module.css';
import Nav from '@/components/Nav/Nav';
import NavItem from "@/components/NavItem/Navitem";
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
export default function Share() {
  return (
    <>
     <Nav>
        <NavItem>
          <ChatDropdown></ChatDropdown>
          <DropdownMenu></DropdownMenu>
        </NavItem>
      </Nav>
      <div>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
    
      </div>
      <header className={classes.header}>
        <h1>
         Its time to Share your plan!!
        </h1>
        <p>Or any other workout daily</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          IMAGE PICKER
          <p className={classes.actions}>
            <button type="submit">Share</button>
          </p>
        </form>
      </main>
    </>
  );
}