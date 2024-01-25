// page/profile/page.tsx
"use client"
import React, { useEffect, useState } from 'react';
import db from '../../database/connect_db';
import Image from 'next/image';
import profileuser from '../../../public/assets/img/sample2.webp';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';

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
      <div className="content1  lg:w-[40%] h-[50px] md:w=[100%] rounded">
    sd
      </div>
      <div className="Content2  lg:w-[60%] md:w=[100%] rounded lg:ml-4">
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
            <div>
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
