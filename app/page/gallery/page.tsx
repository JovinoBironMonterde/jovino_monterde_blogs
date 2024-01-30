"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import CircularProgress from '@mui/joy/CircularProgress';
import cover1 from '../../../public/assets/img/cover1.webp';
import cover2 from '../../../public/assets/img/cover2.webp';
import image1 from '../../../public/assets/img/sample2.webp';

const Page = () => {
  const [loading, setLoading] = useState(false);

  // Function to handle the loading state when clicking tabs
  const handleTabChange = () => {
    setLoading(true); // Set loading to true when changing tabs
    // Simulate loading delay (replace this with actual data fetching)
    setTimeout(() => {
      setLoading(false); // Set loading to false after delay
    }, 3000); // Adjust timeout as needed
  };

  return (
    <div className='PageContainer'>
      <div className="">
        <Tabs aria-label="Basic tabs" defaultValue={0} onChange={handleTabChange}>
          <TabList>
            <Tab>Photos</Tab>
            <Tab>Albums</Tab>
          </TabList>
          <div className="spinnerContainer">
          {loading && <CircularProgress />} {/* Show spinner if loading */}
          </div>
          <TabPanel value={0}>
            {!loading && ( // Display ".Tab1-Container" only when loading is false
              <div className="Tab1-Container">
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
              </div>
            )}
          </TabPanel>
          <TabPanel value={1}>
            <b>Second</b>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Page;
