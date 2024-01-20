import React from 'react'
import Link from 'next/link'

const Topbar = () => {
  return (
    <div className='flex justify-between items-center p-3'>
     <div className="logo">sd</div>
     <ul className='flex items-center'>
        <Link className='toplink' href="https://portfolio-jovinomonterde-new.vercel.app/">Portfolio</Link>
        <Link className='toplink' href="https://drive.google.com/file/d/1bf6M3LNK8ONDyYhjW2_t9FFp3diqqesd/view">Resume</Link>
     </ul>
    </div>
  )
}

export default Topbar
