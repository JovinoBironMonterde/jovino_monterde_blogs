import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';


const Navbar = () => {
  return (
    <div className='rounded overflow-hidden'>
      <div className="cover-photo h-60 bg-slate-200">

      </div>
      <div className="profile-container flex justify-between items-center p-4 h-50 px-4 bg-slate-100">
        <div className="Like-container text-center ">
          <div className="icon-container mb-2"><ThumbUpIcon className='icon'/></div>
          <div className="totalCount">100</div>
          <div className="titlenameName">Likes</div>
        </div>
        <div className="Comment-Container text-center">
          <div className="icon-container mb-2"><CommentIcon className='icon'/></div>
          <div className="totalCount">100</div>
          <div className="titlenameName">Comments</div>
        </div>

        {/* profile */}
        <div className="profileImage text-center">
          <div className="imagecontainer text-center">
          <div className="image w-40 h-40 border rounded-full">image</div>
          </div>
          <div className="namedetails text-center">
            <div className="profilename">Jovino MOnterde</div>
            <div className="designation">Frontend Developer</div>
          </div>
        </div>
        <div className="Event-Conatiner">Event</div>
        <div className="AddPost-Container">Add Post</div>
      </div>
      <div className="MenuMainContainer bg-blue-100 w-full px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="SearchContainer">
            <input type="text" className=''  name="" id="Inputsearch" />
          </div>
          <div className="menuContainer">
            <Link className='mx-3' href="/page/profile">Profile</Link>
            <Link className='mx-3' href="/page/post">Post</Link>
            <Link className='mx-3' href="/page/gallery">Gallery</Link>
            <Link className='mx-3' href="/page/follower">Followers</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
