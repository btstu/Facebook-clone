import React, { useState } from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbUpIconOutlined from '@material-ui/icons/ThumbUpOutlined'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NearMeIcon from '@material-ui/icons/NearMe';
import { ExpandMoreOutlined } from '@material-ui/icons'
import { useStateValue } from './StateProvider';



function Post({profilePic, image, username, timestamp, message, likes}) {

    const [{ user }, dispatch] = useStateValue();
    const [liked, setLiked] =useState(false)

    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic}
                className= "post__avatar" />
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}
                    </p>
                </div>
    </div>
                <div className="post__bottom">
                   <p>{message}</p>
                </div>

                

        
            <div className="post__image">
                 <img src={image} alt=""/>    
                </div>

            <div className="post__options">
                         {liked ? (    <div className="post__option" onClick={(e) => setLiked (false)}>
    <ThumbUpIcon className="red" /> </div>):(

                   <div className="post__option" onClick={(e) => setLiked (true)}>  <ThumbUpIconOutlined  /> </div>)}
                    {/* <p>{liked ? likes + 1 : likes}</p> */}
         
                <div className="post__option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div> 
                <div className="post__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div> 
                <div className="post__option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlined />
                </div> 
            </div> 
        </div>
    )
}

export default Post
