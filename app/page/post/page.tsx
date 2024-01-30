"use client"
import React, { useEffect, useState  } from 'react';
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
import FullscreenModal from '../../components/modals/fullscreen-modal'

const Page = () => {
  const videoSrc = "https://www.youtube.com/embed/Y5LU4mkC4y0?si=mteX1JR0IlP3SBn2";
  const name = "Jovino Monterde";

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };


  return (
    <div className='PageContainer'>
      <div className="postContent-desktop">
        <div className="postContent-container">
            <div className="post-page-content">
              <div className="card-body">
                <input type="text" value='January 20, 2024' hidden />
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
                  <div className="comment"  onClick={handleOpenModal}>
                    <div className='linkButton mx-4'><span>0</span>&nbsp;Comments</div>
                    <CommentIcon className='iconbutton'/>
                  </div>
                </div>
              </div>

              <div className="card-body">
                <input type="text" value='January 05, 2024' hidden />
                <div className="postheader">
                  <div className='postheadername'>
                    <div className="post-user image"><Image src={profileuser} className='img' alt="Profile User"/></div>
                    <div className="">
                      <div className="username">{name}</div>
                      <div className="post-date">January 05, 2024</div>
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
                <input type="text" value='January 19, 2024' hidden />
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
              <div className="card-body">
                <input type="text" value='January 05, 2024' hidden />
                <div className="postheader">
                  <div className='postheadername'>
                    <div className="post-user image"><Image src={profileuser} className='img' alt="Profile User"/></div>
                    <div className="">
                      <div className="username">{name}</div>
                      <div className="post-date">January 05, 2024</div>
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

            </div>
            <div className="post-page-content">
              <div className="card-body">
                <input type="text" value='January 10, 2024' hidden />
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
                <input type="text" value='January 21, 2024' hidden />
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
                <input type="text" value='January 02, 2024' hidden />
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
                <input type="text" value='January 24, 2024' hidden />
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
                <input type="text" value='January 14, 2024' hidden />
                <div className="postheader">
                  <div className='postheadername'>
                    <div className="post-user image"><Image src={profileuser} className='img' alt="Profile User"/></div>
                    <div className="">
                      <div className="username">{name}</div>
                      <div className="post-date">January 14, 2024</div>
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

      <div className="postContent-mobile">
        <div className="PostContent-container-mobile">
          <PostContent/>
        </div>
      </div>
    </div>
  )
}

export default Page
