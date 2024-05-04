import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import {
  faShareSquare,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import "./Post.css";
import up from "./pf.png";
import yoga from './yoga.jpg'
import usericon from "./usericon.png"
function Post({ user, content, image, initialLikes = 0, comments, shares }) {
  const [likes, setLikes] = useState(initialLikes);
  
  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="post-container">
      <div className="post-header">
        <Image className="post-profile-image" src={up} alt={user.name} width={100} height={100} />
        <h3 className="post-user-name">{user}</h3>
      </div>
      <p className="post-content">{content}</p>
      {Image && <Image className="post-image" src={yoga} alt="Post" width={198} height={100} />}
      <div className="post-actions">
        <button className="post-action-button" onClick={handleLike}>  <FontAwesomeIcon icon={faThumbsUp} />({likes})</button>
        <input type="text" placeholder="comment here"/>
        <button className="post-action-button"> <FontAwesomeIcon icon={faShareSquare} />({shares})</button>
      </div>
    </div>
  );
}

export default Post;
