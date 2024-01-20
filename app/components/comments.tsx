import React from 'react'
import Image from 'next/image'


const comments = () => {
  return (
    <div>
      <div className="w-100 my-2 p-4 rounded bg-slate-300">
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
    </div>
  )
}

export default comments
