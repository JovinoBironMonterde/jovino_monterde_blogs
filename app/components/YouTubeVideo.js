// components/YouTubeVideo.js

import React from 'react';

const DynamicIframe = ({ src }) => {
  return (
    <iframe

      className="embedYt"
      src={src}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};

export default DynamicIframe;








// // components/YouTubeVideo.js

// const YouTubeVideo = ({ videoId }) => {
//     return (
//       <div className="video-container">
//         <iframe
//           width="auto"
//           height="315"
//           className="embedYt"
//           src={`https://www.youtube.com/embed/${videoId}`}
//           title="YouTube video player"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//         ></iframe>
//       </div>
//     );
//   };
  
//   export default YouTubeVideo;
  