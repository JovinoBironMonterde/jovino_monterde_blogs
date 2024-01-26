// // app/components/loading/loadingSpinner.js
// "use client"
// import React, { useState } from 'react';
// import CircularProgress from '@mui/joy/CircularProgress';

// const loadingSpinner = () => {
//   const [loading, setLoading] = useState(false);

//   // Function to handle the loading state when clicking tabs
//   const handleTabChange = () => {
//     setLoading(true); // Set loading to true when changing tabs
//     // Simulate loading delay (replace this with actual data fetching)
//     setTimeout(() => {
//       setLoading(false); // Set loading to false after delay
//     }, 2000); // Adjust timeout as needed
//   };
//   return (
//     <div>
//       <div className="spinnerContainer">
//           {loading && <CircularProgress />} {/* Show spinner if loading */}
//           </div>
//     </div>
//   )
// }

// export default loadingSpinner
