import React from 'react'
import Image from 'next/image'
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import cover1 from '../../../public/assets/img/cover1.webp'
import cover2 from '../../../public/assets/img/cover2.webp'
import image1 from '../../../public/assets/img/sample2.webp'

const Page = () => {
  return (
    <div className='PageContainer'>
      <div className="">
      <Tabs aria-label="Basic tabs" defaultValue={0}>
        <TabList>
          <Tab>Photos</Tab>
          <Tab>Albums</Tab>
        </TabList>
        <TabPanel value={0}>
          <b>All photos</b>
          <div className='Gallery-Photos-Container'>
            <div className="imageGalleryContent">
              <Image src={cover1} className='img' alt="Profile User"/>
            </div>
            <div className="imageGalleryContent">
              <Image src={cover2} className='img' alt="Profile User"/>
            </div>
            <div className="imageGalleryContent">
              <Image src={image1} className='img' alt="Profile User"/>
            </div>
            <div className="imageGalleryContent">
              <Image src={cover2} className='img' alt="Profile User"/>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={1}>
          <b>Second</b> tab panel
        </TabPanel>
      </Tabs>
      </div>
    </div>
  )
}

export default Page
