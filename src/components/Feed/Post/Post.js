import Avatar from "@material-ui/core/Avatar";
import React, { forwardRef } from "react";
import InputOption from "../InputOption";
import "./Post.css";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0].toUpperCase()}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption
          Icon={ThumbUpAltOutlinedIcon}
          title="Like"
          color="#676766"
        />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" color="#676766" />
        <InputOption Icon={ShareIcon} title="Share" color="#676766" />
        <InputOption Icon={SendIcon} title="Send" color="#676766" />
      </div>
    </div>
  );
});

export default Post;
