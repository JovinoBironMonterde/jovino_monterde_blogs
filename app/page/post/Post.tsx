"use client"
import React, { useEffect } from 'react';
import Lazyloading from '../../components/loading/lazyloading'
import YouTubeVideo from '../../components/YouTubeVideo'

import Image from 'next/image';
import profileuser from '../../../public/assets/img/sample2.webp';
import AstrodomImageGalses from '../../../public/assets/img/astrodomeimage-with-sunglass.jpg';
import Link from 'next/link';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MonitorIcon from '@mui/icons-material/Monitor';
import HomeIcon from '@mui/icons-material/Home';


const Post = () => {
    const videoSrc = "https://www.youtube.com/embed/Y5LU4mkC4y0?si=mteX1JR0IlP3SBn2";
    const name = "Jovino Monterde";
  return (
    <div className="post-page-content">
        <div className="card-body">
            <div className="postheader">
            <div className='postheadername'>
                <div className="post-user image"><Image src={profileuser} className='img' alt="Profile User"/></div>
                <div className="">
                <div className="username">{name}</div>
                <div className="post-date">June- 06, 1993ccccc</div>
                </div>
            </div>
            <div className=''><MoreVertIcon className='iconbutton'/></div>
            </div>
            <div className="Postcontent">
            <Image src={AstrodomImageGalses} className='img' alt="Profile User"/>
            </div>
            <div className='likecomment-container'>
            <div className='like'>
                <ThumbUpOffAltIcon className='iconbutton'/>
                <div className='linkButton'>
                <span id='visitorLike'>0</span>
                </div>
            </div>
            <div className="comment">
                <div className='linkButton mx-4'><span>0</span>&nbsp;Comments</div>
                <CommentIcon className='iconbutton'/>
            </div>
            </div>
        </div>
        </div>
  )
}

export default Post
