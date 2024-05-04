import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import {
    faImage,
  faShareSquare,
  faSmileWink,
  faThumbsUp,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import "./postway.css"
import usericon from "./usericon.png"
function Post({ user, content, image, initialLikes = 0, comments, shares }) {
  const [likes, setLikes] = useState(initialLikes);
  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
   <div className="post-container">
   <div className="post-header">
       <Image src= {usericon} style={{width:"5rem"}}/> <Link href = "/share" style={{width:"100%"}}><input type="text" placeholder="What you want to share "></input></Link>
      </div>
      <FontAwesomeIcon icon={faVideo} style={{color:"red" , } }></FontAwesomeIcon > Live video
      <FontAwesomeIcon icon={faImage} style={{color:"green"}} ></FontAwesomeIcon> Photo/video
      <FontAwesomeIcon icon={faSmileWink} style={{color:"yellow"}} ></FontAwesomeIcon> Photo/video
      <div className="post-actions">
      </div>
      </div>
  );
}

export default Post;
