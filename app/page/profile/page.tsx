// page/profile/page.tsx
"use client"
import React, { useEffect, useState } from 'react';
import db from '../../database/connect_db';
import Image from 'next/image';
import profileuser from '../../../public/assets/img/sample2.webp';
import Link from 'next/link';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MonitorIcon from '@mui/icons-material/Monitor';
import HomeIcon from '@mui/icons-material/Home';

import Medmodal from '../../components/modals/md-modal';
import Comments from '../../components/comments';


const Profile = () => {
  const [open, setOpen] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const mdhandleOpen = () => {
    setOpen(true);
  };

  const mdhandleClose = () => {
    setOpen(false);
  };

  const handleLike = async () => {
    try {
      const response = await fetch('.././api/like', {
        method: 'POST',
      });

      if (response.ok) {
        // Assuming the response contains the updated likes count
        const result = await response.json();
        setLikesCount(result.likesCount);
      } else {
        console.error('Failed to like the post');
      }
    } catch (error) {
      console.error('Error while liking the post:', error);
    }
  };

  useEffect(() => {
    // Fetch likes count from the database on component mount
    const fetchLikesCount = async () => {
      try {
        const response = await fetch('.././api/like');

        if (response.ok) {
          const result = await response.json();
          setLikesCount(result.likesCount);
        } else {
          console.error('Failed to fetch likes count');
        }
      } catch (error) {
        console.error('Error while fetching likes count:', error);
      }
    };

    fetchLikesCount();
  }, []);

  return (
    <div className='PageContainer'>
     <div className="lg:flex md:block">
      <div className="content1  lg:w-[40%] md:w=[100%] rounded">
        <div className="card-body">
          <h5>About</h5>
          <p>Hello! I&apos;m <span>Jovi Monterde&rsquo;</span> a passionate frontend developer with a love for creating beautiful and user-friendly web experiences. With 11 months of experience in the field, I &rsquo; ve had the privilege of working on a wide range of projects, from single-page applications to complex e-commerce platforms.</p>
          <hr className='my-4' />
          <div>
            <div className="flex items-center mb-3">
              <div className='mr-3'><BusinessCenterIcon /></div>
              <div>
                <p>Junior Frontend Developer</p>
              </div>
            </div>
            <div className="flex items-center mb-3">
              <div className='mr-3'><AlternateEmailIcon /></div>
              <div>
                <p>jovinobironmonterde@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center mb-3">
              <div className='mr-3'><MonitorIcon /></div>
              <div>
                <p><Link href="https://portfolio-jovinomonterde.vercel.app/">https://portfolio-jovinomonterde.vercel.app/</Link></p>
              </div>
            </div>
            <div className="flex items-center mb-3">
              <div className='mr-3'><HomeIcon /></div>
              <div>
                <p>Blk 66 Lot 25, Channel Ridge View
                  Dist 1 Babatngon Leyte
                  </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card-body">
          <h5>Photos</h5>
          <div className="PhotosContainer">
            <div className="photoimage">
              <Image src={profileuser} className='img' alt="Profile User"/>
            </div>
            <div className="photoimage">
              <Image src={profileuser} className='img' alt="Profile User"/>
            </div>
            <div className="photoimage">
              <Image src={profileuser} className='img' alt="Profile User"/>
            </div>
            <div className="photoimage">
              <Image src={profileuser} className='img' alt="Profile User"/>
            </div>
            <div className="photoimage">
              <Image src={profileuser} className='img' alt="Profile User"/>
            </div>
            <div className="photoimage">
              <Image src={profileuser} className='img' alt="Profile User"/>
            </div>
          </div>
        </div>

        <div className="card-body">
          <h5>Life Event</h5>
        </div>

        <div className="card-body">
          <h5>Skills/Stack</h5>
          <div>
            <div className='my-3 rounded bg-slate-300'>
              <div className="flex justify-between p-3">
                <div>Html</div>
                <div>Logo</div>
              </div>
              <div className="BarContainer">
                <div className="Bar-outer">
                  <div className="bar-Inner"></div>
                </div>
                <div className='percentage'>30%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-2"></div>
      <div className="Content2  lg:w-[60%] md:w=[100%] rounded">
        <div className="Post-content mb-3">
            <div className="card-body">
              <div className="postheader">
                <div className='postheadername'>
                  <div className="post-user image"><Image src={profileuser} className='img' alt="Profile User"/></div>
                  <div className="">
                    <div className="username">Zander Ford</div>
                    <div className="post-date">June- 06, 1993</div>
                  </div>
                </div>
                <div className=''><MoreVertIcon className='iconbutton'/></div>
              </div>
              <div className="Postcontent">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, quasi! Veniam tempora maxime aut labore quaerat eum expedita voluptate doloribus ab architecto corrupti harum illo quae quis, hic, dolores excepturi!
              </div>
              <div className='likecomment-container'>
                <div className='like'>
                  <ThumbUpOffAltIcon className='iconbutton' onClick={handleLike} />
                  <div className='linkButton'>
                    <span id='visitorLike'>{likesCount}</span> <span>Others</span>
                  </div>
                </div>

                <div className="comment"   onClick={mdhandleOpen}>
                  <div className='linkButton mx-4'><span>10</span>&nbsp;Comments</div>
                  <CommentIcon className='iconbutton'/>
                </div>
              </div>
            </div>

            <div className="card-body">
              <div className="postheader">
                <div className='postheadername'>
                  <div className="post-user image"><Image src={profileuser} className='img' alt="Profile User"/></div>
                  <div className="">
                    <div className="username">Zander Ford</div>
                    <div className="post-date">June- 06, 1993</div>
                  </div>
                </div>
                <div><MoreVertIcon className='iconbutton'/></div>
              </div>
              <div className="Postcontent">
                <p className='content'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, quasi! Veniam tempora maxime aut labore quaerat eum expedita voluptate doloribus ab architecto corrupti harum illo quae quis, hic, dolores excepturi!</p>
                <div className="postimage-content">
                  <div className="imageCon"> <img src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="100%" /></div>
                  <div className="imageCon"> <img src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="100%" /></div>
                  <div className="imageCon"> <img src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="100%" /></div>
                  <div className="imageCon"> <img src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="100%" /></div>
                </div>
              </div>
              <div className='likecomment-container'>
                <div className="like">
                  <ThumbUpOffAltIcon className='iconbutton' />
                  <div className='linkButton'>You and <span>10</span>&nbsp;Others</div>
                </div>
                <div className="comment"   onClick={mdhandleOpen}>
                  <div className='linkButton mx-4'><span>10</span>&nbsp;Comments</div>
                  <CommentIcon className='iconbutton'/>
                </div>
              </div>
            </div>
            <div className='modal'>
              <Medmodal
                open={open}
                onClose={mdhandleClose}
                title=""
                description=""
              >
                <div className="py-3 px-4 fs-20"><h2>All Comments</h2></div>
                
                <div className='ModalCommentContainer pt-4'>
                  <div className="Modal-content">
                    <div className="AddCommentConatiner">
                      <Comments />
                    </div>
                  </div>
                </div>
              </Medmodal>
            </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Profile
