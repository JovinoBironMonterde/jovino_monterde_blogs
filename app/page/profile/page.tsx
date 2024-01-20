"use client"
import React, { useState } from 'react';
import Image from 'next/image'
import profileuser from '../../../public/assets/img/sample2.webp'

import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';

import Smallmodal from '../../components/modals/sm-modal'
import Medmodal from '../../components/modals/md-modal'

const Page = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const mdhandleOpen = () => {
    setOpen(true);
  };

  return (
    <div className='PageContainer'>
     <div className="lg:flex md:block">
      <div className="content1 card lg:w-[40%] h-[50px] md:w=[100%] rounded">
    sd
      </div>
      <div className="Content2 card lg:w-[60%] md:w=[100%] rounded lg:ml-4">
        <div className="AddPost mb-3">
          <div className="input-container">
            <textarea name="newpost" placeholder='Create new post' className='p-3' id=""></textarea>
          </div>
          <div className="PostContainer">
            <div className="w-[100] h-[40%] bg-slate-400">sds</div>
          </div>
        </div>
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
                <div><MoreVertIcon className='MoreVert'/></div>
              </div>
              <div className="Postcontent">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, quasi! Veniam tempora maxime aut labore quaerat eum expedita voluptate doloribus ab architecto corrupti harum illo quae quis, hic, dolores excepturi!
              </div>
              <div className='likecomment-container'>
                <div className="like"><ThumbUpOffAltIcon className='like-icon' /></div>
                <div className="comment"   onClick={mdhandleOpen}><CommentIcon className='comment-icon'/></div>
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
                <div><MoreVertIcon className='MoreVert'/></div>
              </div>
              <div className="Postcontent">
                <p className='content'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, quasi! Veniam tempora maxime aut labore quaerat eum expedita voluptate doloribus ab architecto corrupti harum illo quae quis, hic, dolores excepturi!</p>
                <div className="postimage-content">
                  <img src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="100%" />
                </div>
              </div>
              <div className='likecomment-container'>
                <div className="like"><ThumbUpOffAltIcon className='like-icon' /></div>
                <div className="comment"  onClick={mdhandleOpen}><CommentIcon className='comment-icon'/></div>
              </div>
            </div>
            <div>


  
            <Medmodal
              open={open}
              onClose={handleClose}
              title="This is the modal title"
              description=""
            >
              <div className='fsdfdfd'>
                {/* Your dynamic content goes here */}
                <p>This is the dynamic content of the modal.</p>
                <div className="Modal-content">
                  <img src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="100%" />
                </div>
                <div>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, eligendi expedita. Aut, repellat nostrum! Rerum delectus sint praesentium velit maxime facere ut repudiandae doloremque quam, quos odit vitae enim vel corrupti adipisci nostrum nam error consequatur dignissimos officiis! Unde consectetur voluptas laborum adipisci, blanditiis odit cupiditate suscipit reiciendis culpa omnis!
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

export default Page
