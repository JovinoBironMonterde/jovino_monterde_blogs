"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import cover1 from '../../public/assets/img/cover1.webp'
import cover2 from '../../public/assets/img/cover2.webp'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import profile from '../../public/assets/img/sample2.webp'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Navbar = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [cover1, cover2]; // Replace cover1 and cover2 with your image sources

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the current slide index
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change the interval (in milliseconds) according to your needs

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  return (
    <div className='rounded w-100 overflow-hidden'>
      <div className="cover-photo h-60 w-100 overflow-hidden">
      <div className='dfasfdsf'>
        {slides.map((src, index) => (
          <Image
            key={index}
            src={src}
            id='cover-img'
            className={`${index === currentSlide ? 'fade-in-out' : 'hidden'}`} // Apply styles for the current slide
            alt={`cover${index + 1}`}
          />
        ))}
    </div>
      </div>
      <div className="profile-container flex md:flex-row  justify-between items-center p-4 px-4">
        <div className="flex HeaderIconmenu">
          <div className="Like-container text-center ">
            <div className="icon-container mb-2"><ThumbUpIcon className='icon'/></div>
            <div className="totalCount"><h4>100</h4></div>
            <div className="titlenameName">Likes</div>
          </div>
          <div className="Comment-Container text-center">
            <div className="icon-container mb-2"><CommentIcon className='icon'/></div>
            <div className="totalCount"><h4>100</h4></div>
            <div className="titlenameName">Comments</div>
          </div>
          <div className="Comment-Container text-center">
            <div className="icon-container mb-2"><CommentIcon className='icon'/></div>
            <div className="totalCount"><h4>100</h4></div>
            <div className="titlenameName">Followers</div>
          </div>
        </div>
        {/* profile */}
        <div className="profileImage text-center sm:float-start mb-4 md:mb-0 md:mr-4">
          <div className="imagecontainer text-center">
          <div className="imageProfile w-40 h-40 border rounded-full overflow-hidden">
            <Image src={profile} className='img' alt="Profile User"/>
          </div>
          </div>
          <div className="namedetails text-center">
            <div className="profilename"><h4>Jovino Monterde</h4></div>
            <div className="designation"><h5>Personal blog</h5></div>
          </div>
        </div>
        <div className="flex HeaderIconmenu">
          <div className="socialmedia-Icon facebook"><FacebookIcon className='icon'/></div>
          <div className="socialmedia-Icon Linkedin"><LinkedInIcon className='icon'/></div>
          <div className="socialmedia-Icon Instagram"><InstagramIcon className='icon'/></div>
          <div className="socialmedia-Icon xIcon"><XIcon className='icon'/></div>
          <div className="socialmedia-Icon youtube"><YouTubeIcon className='icon'/></div>
          {/* <div className="Event-Conatiner">Event</div>
          <div className="AddPost-Container">Add Post</div> */}
        </div>
      </div>


      <div className="mobilesize-navbar p-4">
        <div className="mobileNavbarContent">
          <div className="flex w-100 p-4">
            <div className="imagecontainer text-center">
              <div className="imageProfile w-40 h-40 border rounded-full overflow-hidden">
                <Image src={profile} className='img' alt="Profile User"/>
              </div>
            </div>
            <div className="namedetails pl-4">
              <div className="profilename"><h1>Jovino Monterde</h1></div>
              <div className="designation"><h3>Personal blog</h3></div>
            </div>
          </div>
          <div className="mobileSize-HeaderIconmenu-Container">
            <div className="mobileSize-HeaderIconmenu">
              <div className="Like-container text-center ">
                <div className="icon-container mb-2"><ThumbUpIcon className='icon'/></div>
                <div className="totalCount"><h4>100</h4></div>
                <div className="titlenameName">Likes</div>
              </div>
              <div className="Comment-Container text-center">
                <div className="icon-container mb-2"><CommentIcon className='icon'/></div>
                <div className="totalCount"><h4>100</h4></div>
                <div className="titlenameName">Comments</div>
              </div>
              <div className="Comment-Container text-center">
                <div className="icon-container mb-2"><CommentIcon className='icon'/></div>
                <div className="totalCount"><h4>100</h4></div>
                <div className="titlenameName">Followers</div>
              </div>
            </div>
            {/* profile */}
          
            <div className="mobileSize-HeaderIconmenu">
              <div className="socialmedia-Icon facebook"><FacebookIcon className='icon'/></div>
              <div className="socialmedia-Icon Linkedin"><LinkedInIcon className='icon'/></div>
              <div className="socialmedia-Icon Instagram"><InstagramIcon className='icon'/></div>
              <div className="socialmedia-Icon xIcon"><XIcon className='icon'/></div>
              <div className="socialmedia-Icon youtube"><YouTubeIcon className='icon'/></div>
              {/* <div className="Event-Conatiner">Event</div>
              <div className="AddPost-Container">Add Post</div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="customCard MenuMainContainer w-full px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="SearchContainer">
            <input type="text" className=''  name="" id="Inputsearch" />
          </div>
          <div className="menuContainer">
            <Link className='menubutton' href="/page/post">Post</Link>
            <Link className='menubutton' href="/page/profile">Profile</Link>
            <Link className='menubutton' href="/page/gallery">Gallery</Link>
            <Link className='menubutton' href="/page/follower">Followers</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
