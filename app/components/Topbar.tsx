import React from 'react'
import Link from 'next/link'

const Topbar = () => {
  return (
    <div className='flex justify-between items-center p-3'>
     <div className="logo">sd</div>
     <ul className='flex items-center'>
        <Link className='toplink' href="">Portfolio</Link>
        <Link className='toplink' href="">Resume</Link>
     </ul>
    </div>
  )
}

export default Topbar
