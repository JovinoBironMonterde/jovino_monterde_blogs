import React from 'react'
import Image from 'next/image'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ReplyIcon from '@mui/icons-material/Reply';
import SendIcon from '@mui/icons-material/Send';
import ReplyCommentsinput from './ReplyCommentsinput'

const comments = () => {
  return (
    <div className='Comments-Container'>
      <div className='commentcontent'>
        <div className="CommentContainer w-100">
          <div className=" my-2 p-4 bg-slate-100">
            <div className="flex items-center">
                <div className="Commentor-profile mr-2">
                    <img src="https://images.pexels.com/photos/5391172/pexels-photo-5391172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='User image' />
                </div>
                <div className="commentor-name mr-3">Joel Ganobn</div> 
                <span>Jannuary 10, 2024</span>    
            </div>
            <div className="comment-content px-4">
                <p className='px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, dolor pariatur! Totam aliquam, facilis dolore molestiae similique doloremque quidem nulla nihil aperiam ducimus. Natus harum itaque impedit! Deleniti, placeat reiciendis!</p>
            </div>
          </div>
          <div className="Modal-likecomment-container">
            <div className='mx-4 like'>
              <ThumbUpOffAltIcon className='iconbutton' />
              <div className='linkButton'>You and <span>10</span>&nbsp;Others</div>
              </div>
            <div className='mx-4'>
              <ReplyIcon className='iconbutton' />
              <div className='linkButton'><span>10</span>&nbsp;Reply</div>
              </div>
          </div>
        </div>
        <div className="ReplyComment">
          <div className="CommentContainer w-100">
            <div className=" my-2 p-4 bg-slate-100">
              <div className="flex items-center">
                  <div className="Commentor-profile mr-2">
                      <img src="https://images.pexels.com/photos/5391172/pexels-photo-5391172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='User image' />
                  </div>
                  <div className="commentor-name mr-3">Joel Ganobn</div> 
                  <span>Jannuary 10, 2024</span>    
              </div>
              <div className="comment-content px-4">
                  <p className='px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, dolor pariatur! Totam aliquam, facilis dolore molestiae similique doloremque quidem nulla nihil aperiam ducimus. Natus harum itaque impedit! Deleniti, placeat reiciendis!</p>
              </div>
            </div>
            <div className="Modal-likecomment-container">
              <div className='mx-4 like'>
                <ThumbUpOffAltIcon className='iconbutton' />
                <div className='linkButton'>You and <span>10</span>&nbsp;Others</div>
              </div>
            <div className='mx-4'>
              <ReplyIcon className='iconbutton' />
              <div className='linkButton'><span>10</span>&nbsp;Reply</div>
              </div>
          </div>
          </div>
          <div className="CommentContainer w-100">
            <div className=" my-2 p-4 bg-slate-100">
              <div className="flex items-center">
                  <div className="Commentor-profile mr-2">
                      <img src="https://images.pexels.com/photos/5391172/pexels-photo-5391172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='User image' />
                  </div>
                  <div className="commentor-name mr-3">Joel Ganobn</div> 
                  <span>Jannuary 10, 2024</span>    
              </div>
              <div className="comment-content px-4">
                  <p className='px-4'>asasLorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, dolor pariatur! Totam aliquam, facilis dolore molestiae similique doloremque quidem nulla nihil aperiam ducimus. Natus harum itaque impedit! Deleniti, placeat reiciendis!</p>
              </div>
            </div>
            <div className="Modal-likecomment-container">
              <div className='mx-4 like'>
                <ThumbUpOffAltIcon className='iconbutton' />
                <div className='linkButton'>You and <span>10</span>&nbsp;Others</div>
              </div>
            <div className='mx-4'>
              <ReplyIcon className='iconbutton' />
              <div className='linkButton'><span>10</span>&nbsp;Reply</div>
              </div>
          </div>
          </div>
          <div className="dynamicCommentsinput mt-4">
            <ReplyCommentsinput />
          </div>
        </div>
      </div>
      <div className='commentcontent'>
        <div className="CommentContainer w-100">
          <div className=" my-2 p-4 bg-slate-100">
            <div className="flex items-center">
                <div className="Commentor-profile mr-2">
                    <img src="https://images.pexels.com/photos/5391172/pexels-photo-5391172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='User image' />
                </div>
                <div className="commentor-name mr-3">Joel Ganobn</div> 
                <span>Jannuary 10, 2024</span>    
            </div>
            <div className="comment-content px-4">
                <p className='px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, dolor pariatur! Totam aliquam, facilis dolore molestiae similique doloremque quidem nulla nihil aperiam ducimus. Natus harum itaque impedit! Deleniti, placeat reiciendis!</p>
            </div>
          </div>
          <div className="Modal-likecomment-container">
            <div className='mx-4 like'>
              <ThumbUpOffAltIcon className='iconbutton' />
              <div className='linkButton'>You and <span>10</span>&nbsp;Others</div>
            </div>
            <div className='mx-4'>
              <ReplyIcon className='iconbutton' />
              <div className='linkButton'><span>10</span>&nbsp;Reply</div>
              </div>
          </div>
        </div>
        <div className="ReplyComment">
          <div className="CommentContainer w-100">
            <div className=" my-2 p-4 bg-slate-100">
              <div className="flex items-center">
                  <div className="Commentor-profile mr-2">
                      <img src="https://images.pexels.com/photos/5391172/pexels-photo-5391172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='User image' />
                  </div>
                  <div className="commentor-name mr-3">Joel Ganobn</div> 
                  <span>Jannuary 10, 2024</span>    
              </div>
              <div className="comment-content px-4">
                  <p className='px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, dolor pariatur! Totam aliquam, facilis dolore molestiae similique doloremque quidem nulla nihil aperiam ducimus. Natus harum itaque impedit! Deleniti, placeat reiciendis!</p>
              </div>
            </div>
            <div className="Modal-likecomment-container">
              <div className='mx-4 like'>
                <ThumbUpOffAltIcon className='iconbutton' />
                <div className='linkButton'>You and <span>10</span>&nbsp;Others</div>
              </div>
            <div className='mx-4'>
              <ReplyIcon className='iconbutton' />
              <div className='linkButton'><span>10</span>&nbsp;Reply</div>
              </div>
          </div>
          </div>
          <div className="CommentContainer w-100">
            <div className=" my-2 p-4 bg-slate-100">
              <div className="flex items-center">
                  <div className="Commentor-profile mr-2">
                      <img src="https://images.pexels.com/photos/5391172/pexels-photo-5391172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='User image' />
                  </div>
                  <div className="commentor-name mr-3">Joel Ganobn</div> 
                  <span>Jannuary 10, 2024</span>    
              </div>
              <div className="comment-content px-4">
                  <p className='px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, dolor pariatur! Totam aliquam, facilis dolore molestiae similique doloremque quidem nulla nihil aperiam ducimus. Natus harum itaque impedit! Deleniti, placeat reiciendis!</p>
              </div>
            </div>
            <div className="Modal-likecomment-container">
              <div className='mx-4 like'>
                <ThumbUpOffAltIcon className='iconbutton' />
                <div className='linkButton'>You and <span>10</span>&nbsp;Others</div>
              </div>
              <div className='mx-4'>
                <ReplyIcon className='iconbutton' />
                 <div className='linkButton'><span>10</span>&nbsp;Reply</div>
                </div>
            </div>
          </div>
          {/* <div className="flex items-center ">
            <div className="inputCommentProfile">
                <img src="https://images.pexels.com/photos/5391172/pexels-photo-5391172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='User image' width={100} />
            </div>
            <textarea name="" id="" className='mx-3' cols={70}></textarea>
            <div className="sendIcon"><SendIcon /></div>
          </div> */}
        </div>
      </div>


      <div className="inputComment border bg-slate-200">
        <div className="flex items-center ">
          <div className="inputCommentProfile">
              <img src="https://images.pexels.com/photos/5391172/pexels-photo-5391172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='User image' width={100} />
          </div>
          <textarea name="" id="" className='mx-3' cols={70}></textarea>
          <div className="sendIcon"><SendIcon /></div>
        </div>
      </div>
    </div>
  )
}

export default comments
