import React from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ReplyIcon from '@mui/icons-material/Reply';
import SendIcon from '@mui/icons-material/Send';

const ReplyCommentsinput = () => {
  return (
    <div>
       <div className="flex items-center ">
            <div className="inputCommentProfile">
                <img src="https://images.pexels.com/photos/5391172/pexels-photo-5391172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='User image' width={100} />
            </div>
            <textarea name="" id="" className='mx-3' cols={70}></textarea>
            <div className="sendIcon"><SendIcon /></div>
          </div>
    </div>
  )
}

export default ReplyCommentsinput
