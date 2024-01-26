import React from 'react';
import { useRouter } from 'next/router';
import Navbar from './Navbar'; // Assuming Navbar.js is in the same directory

const ParentComponent = () => {
  const router = useRouter();

  return (
    <div>
      {/* Pass the active route as a prop to the Navbar component */}
      <Navbar activeRoute={router.pathname} />
      {/* Other components */}
    </div>
  );
};

export default ParentComponent;