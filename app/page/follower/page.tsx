import React from 'react'
import Image from 'next/image';
import MaleUser from '../../../public/assets/img/maleuser.png'
import FemaleUser from '../../../public/assets/img/femaleUser.png'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Page = () => {
  return (
    <div className='PageContainer'>
      <div className="Folloers-page-container">
        <div className="FollowersCard card-body">
          <div className="flex items-center">
              <div className="folloerImage">  <Image src={MaleUser} className='img' alt="Profile User"/></div>
              <div>
                <div className='FolloersName'>Jake Rosales</div>
                <div className='FolloersEmail'><AlternateEmailIcon className='icon'/>JakeRosales10@gmail.com</div>
                <div className='FolloersEmail'><LocationOnIcon className='icon'/>Tacloban City</div>
              </div>
          </div>
        </div>
        <div className="FollowersCard card-body">
          <div className="flex items-center">
              <div className="folloerImage">  <Image src={MaleUser} className='img' alt="Profile User"/></div>
              <div>
                <div className='FolloersName'>Marco Pantonial</div>
                <div className='FolloersEmail'><AlternateEmailIcon className='icon'/>JoshuaBoss@gmail.com</div>
                <div className='FolloersEmail'><LocationOnIcon className='icon'/>Tacloban City</div>
              </div>
          </div>
        </div>

        <div className="FollowersCard card-body">
          <div className="flex items-center">
              <div className="folloerImage">  <Image src={MaleUser} className='img' alt="Profile User"/></div>
              <div>
                <div className='FolloersName'>Mark Kim</div>
                <div className='FolloersEmail'><AlternateEmailIcon className='icon'/>MarkKim@gmail.com</div>
                <div className='FolloersEmail'><LocationOnIcon className='icon'/>Tacloban City</div>
              </div>
          </div>
        </div>

        <div className="FollowersCard card-body">
          <div className="flex items-center">
              <div className="folloerImage">  <Image src={MaleUser} className='img' alt="Profile User"/></div>
              <div>
                <div className='FolloersName'>Josuer Bague</div>
                <div className='FolloersEmail'><AlternateEmailIcon className='icon'/>JosuerBague10@gmail.com</div>
                <div className='FolloersEmail'><LocationOnIcon className='icon'/>Tacloban City</div>
              </div>
          </div>
        </div>

        <div className="FollowersCard card-body">
          <div className="flex items-center">
              <div className="folloerImage"><Image src={FemaleUser} className='img' alt="Profile User"/></div>
              <div>
                <div className='FolloersName'>Mary Joy Aruges</div>
                <div className='FolloersEmail'><AlternateEmailIcon className='icon'/>MaryJoyAruges@gmail.com</div>
                <div className='FolloersEmail'><LocationOnIcon className='icon'/>Tacloban City</div>
              </div>
          </div>
        </div>

        <div className="FollowersCard card-body">
          <div className="flex items-center">
              <div className="folloerImage">  <Image src={MaleUser} className='img' alt="Profile User"/></div>
              <div>
                <div className='FolloersName'>Eduardo Macabacyao</div>
                <div className='FolloersEmail'><AlternateEmailIcon className='icon'/>EduardoMacabacyao@gmail.com</div>
                <div className='FolloersEmail'><LocationOnIcon className='icon'/>Tacloban City</div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
