import React from "react";
import ThumbsUpEmptyImage from "./ThumbsUpEmpty.svg";
import ThumbsUpFullImage from "./ThumbsUpFull.svg";
import "./MessageItem.css";

export default function MessageItem({ message, toggleLike }) {
  function handleLike(event) {
    toggleLike(message.id);
  }

  return (
    <li key={message.id}>
      <strong>{message.name}:</strong> {message.message}
      <img
        className="like-img"
        src={message.liked ? ThumbsUpFullImage : ThumbsUpEmptyImage}
        alt="like"
        onClick={handleLike}
      />
    </li>
  );
}
