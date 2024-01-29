"use client"
import React, { useEffect } from 'react';
import Lazyloading from '../../components/loading/lazyloading'
import YouTubeVideo from '../../components/YouTubeVideo'

import Image from 'next/image';
import profileuser from '../../../public/assets/img/sample2.webp';
import Cover1 from '../../../public/assets/img/cover1.webp';
import Cover2 from '../../../public/assets/img/cover2.webp';
import AstrodomImageGalses from '../../../public/assets/img/astrodomeimage-with-sunglass.jpg';
import Link from 'next/link';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MonitorIcon from '@mui/icons-material/Monitor';
import HomeIcon from '@mui/icons-material/Home';

import PostContent from './Post'

const Page = () => {
  const videoSrc = "https://www.youtube.com/embed/Y5LU4mkC4y0?si=mteX1JR0IlP3SBn2";
  const name = "Jovino Monterde";

  return (
    <div className='PageContainer'>
      <div className="postContent-container">
        <div className="flex m-0">
          <div className="post-page-content">
            <div className="card-body ">
              <div className="postheader">
                <div className='postheadername'>
                  <div className="post-user image"><Image src={profileuser} className='img' alt="Profile User"/></div>
                  <div className="">
                    <div className="username">{name}</div>
                    <div className="post-date">January 20, 2024</div>
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

            <div className="card-body">
              <div className="postheader">
                <div className='postheadername'>
                  <div className="post-user image"><Image src={profileuser} className='img' alt="Profile User"/></div>
                  <div className="">
                    <div className="username">{name}</div>
                    <div className="post-date">January 21, 2024</div>
                  </div>
                </div>
                <div className=''><MoreVertIcon className='iconbutton'/></div>
              </div>
              <div className="Postcontent">
                {/* <Image src={AstrodomImageGalses} className='img' alt="Profile User"/> */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat soluta nesciunt aperiam aliquid, laborum culpa illum non facere vel repellendus? Eveniet magni et ab doloribus veritatis. Facere voluptatibus officiis, repudiandae ipsam fugit laudantium enim vel tenetur pariatur vero rem magni odio hic cupiditate, ut eum aut doloremque explicabo eius. Eveniet iure nobis impedit adipisci, necessitatibus in id quasi aperiam! Id quaerat laborum praesentium voluptatibus debitis labore molestias dolorum quibusdam consequatur minima illo nesciunt totam ex, ratione doloribus optio sit enim.</p>
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

            <div className="card-body">
              <div className="postheader">
                <div className='postheadername'>
                  <div className="post-user image"><Image src={profileuser} className='img' alt="Profile User"/></div>
                  <div className="">
                    <div className="username">{name}</div>
                    <div className="post-date">January 19, 2024</div>
                  </div>
                </div>
                <div className=''><MoreVertIcon className='iconbutton'/></div>
              </div>
              <div className="Postcontent">
              <YouTubeVideo src={videoSrc} />
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
          <div className="post-page-content">
            <div className="card-body">
              <div className="postheader">
                <div className='postheadername'>
                  <div className="post-user image"><Image src={profileuser} className='img' alt="Profile User"/></div>
                  <div className="">
                    <div className="username">{name}</div>
                    <div className="post-date">January 10, 2024</div>
                  </div>
                </div>
                <div className=''><MoreVertIcon className='iconbutton'/></div>
              </div>
              <div className="Postcontent">
                {/* <Image src={AstrodomImageGalses} className='img' alt="Profile User"/> */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi modi omnis quam fugit cupiditate, repudiandae veniam, veritatis itaque sed vitae accusamus, aperiam odit ad maiores quas saepe! Saepe, corporis eos.</p>
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

            <div className="card-body">
              <div className="postheader">
                <div className='postheadername'>
                  <div className="post-user image"><Image src={profileuser} className='img' alt="Profile User"/></div>
                  <div className="">
                    <div className="username">{name}</div>
                    <div className="post-date">January 21, 2024</div>
                  </div>
                </div>
                <div className=''><MoreVertIcon className='iconbutton'/></div>
              </div>
              <div className="Postcontent">
                {/* <Image src={AstrodomImageGalses} className='img' alt="Profile User"/> */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat soluta nesciunt aperiam aliquid, laborum culpa illum non facere vel repellendus? Eveniet magni et ab doloribus veritatis. Facere voluptatibus officiis, repudiandae ipsam fugit laudantium enim vel tenetur pariatur vero rem magni odio hic cupiditate, ut eum aut doloremque explicabo eius. Eveniet iure nobis impedit adipisci, necessitatibus in id quasi aperiam! Id quaerat laborum praesentium voluptatibus debitis labore molestias dolorum quibusdam consequatur minima illo nesciunt totam ex, ratione doloribus optio sit enim.</p>
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

            <div className="card-body ">
              <div className="postheader">
                <div className='postheadername'>
                  <div className="post-user image"><Image src={profileuser} className='img' alt="Profile User"/></div>
                  <div className="">
                    <div className="username">{name}</div>
                    <div className="post-date">January 2, 2024</div>
                  </div>
                </div>
                <div className=''><MoreVertIcon className='iconbutton'/></div>
              </div>
              <div className="Postcontent">
                <Image src={profileuser} className='img' alt="Profile User"/>
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

            <div className="card-body">
              <div className="postheader">
                <div className='postheadername'>
                  <div className="post-user image"><Image src={profileuser} className='img' alt="Profile User"/></div>
                  <div className="">
                    <div className="username">{name}</div>
                    <div className="post-date">January 24, 2024</div>
                  </div>
                </div>
                <div className=''><MoreVertIcon className='iconbutton'/></div>
              </div>
              <div className="Postcontent">
                {/* <Image src={AstrodomImageGalses} className='img' alt="Profile User"/> */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat soluta nesciunt aperiam aliquid, laborum culpa illum non facere vel repellendus? Eveniet magni et ab doloribus veritatis. Facere voluptatibus officiis, repudiandae ipsam fugit laudantium enim vel tenetur pariatur vero rem magni odio hic cupiditate, ut eum aut doloremque explicabo eius. Eveniet iure nobis impedit adipisci, necessitatibus in id quasi aperiam! Id quaerat laborum praesentium voluptatibus debitis labore molestias dolorum quibusdam consequatur minima illo nesciunt totam ex, ratione doloribus optio sit enim.</p>
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

            <div className="card-body">
              <div className="postheader">
                <div className='postheadername'>
                  <div className="post-user image"><Image src={profileuser} className='img' alt="Profile User"/></div>
                  <div className="">
                    <div className="username">{name}</div>
                    <div className="post-date">January 24, 2024</div>
                  </div>
                </div>
                <div className=''><MoreVertIcon className='iconbutton'/></div>
              </div>
              <div className="Postcontent">
                {/* <Image src={AstrodomImageGalses} className='img' alt="Profile User"/> */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat soluta nesciunt aperiam aliquid, laborum culpa illum non facere vel repellendus? Eveniet magni et ab doloribus veritatis. Facere voluptatibus officiis, repudiandae ipsam fugit laudantium enim vel tenetur pariatur vero rem magni odio hic cupiditate, ut eum aut doloremque explicabo eius. Eveniet iure nobis impedit adipisci, necessitatibus in id quasi aperiam! Id quaerat laborum praesentium voluptatibus debitis labore molestias dolorum quibusdam consequatur minima illo nesciunt totam ex, ratione doloribus optio sit enim.</p>
                  <Image src={Cover1} className='img' alt="Profile User"/>
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
        </div>
      </div>





        {/* <div className="Post-Main-Conatiner">
          <div className="card-body post-page-content">
            <div className="title-card">
              <div className="image"></div>
              t
            </div>
            <p>Aliquam atque tempora modi vero maxime. Sint!</p>
            <div className="imageContainer">
            <YouTubeVideo src={videoSrc} />
            </div>
            <div>df</div>
          </div>

          <div className="card-body post-page-content">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, provident.</p>
          </div>
          <div className="card-body post-page-content">
            <div className="postheader">
              <div className='postheadername'>
                <div className="post-user image"><Image src={profileuser} className='img' alt="Profile User"/></div>
                <div className="">
                  <div className="username">Jovino Monterde</div>
                  <div className="post-date">June- 06, 1993</div>
                </div>
              </div>
              <div className=''><MoreVertIcon className='iconbutton'/></div>
            </div>
            <p> Excepturi repudiandae ad ipsum est dicta animi?</p>
            <div className="imageContainer">
            <YouTubeVideo src={videoSrc} />
            </div>
          </div>



          <div className="card-body post-page-content">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, provident.</p>
          </div>
          <div className="card-body post-page-content">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, provident.</p>
          </div>
          <div className="card-body post-page-content">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, provident.</p>
          </div>
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, quasi! Veniam tempora maxime aut labore quaerat eum expedita voluptate doloribus ab architecto corrupti harum illo quae quis, hic, dolores excepturi!
              </div>
              <div className='likecomment-container'>
                <div className='like'>
                  <ThumbUpOffAltIcon className='iconbutton'/>
                  <div className='linkButton'>
                    <span id='visitorLike'></span> <span>Others</span>
                  </div>
                </div>
                <div className="comment">
                  <div className='linkButton mx-4'><span>10</span>&nbsp;Comments</div>
                  <CommentIcon className='iconbutton'/>
                </div>
              </div>
            </div>
          </div>

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
        </div> */}
    </div>
  )
}

export default Page
