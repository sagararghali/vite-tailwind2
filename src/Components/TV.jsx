import React from 'react'
import './TV.css'

export default function TV() {
  return (
<>
    <div className="container">
	<div className="loader"></div>
  <div className="loader"></div>
  <div className="loader"></div>



	
</div>
</>
  )
}



// import React, { useState } from 'react';

// import image1 from './imagess/comic.webp';
// import image2 from './imagess/images.png';

// // Media array containing objects with type and source
// const mediaFiles = [
//    { type: 'image', src: image1 },
//   { type: 'image', src: image2 },
// ];

// const TV = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextMedia = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === mediaFiles.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const currentMedia = mediaFiles[currentIndex];

//   return (
//     <div className="max-w-md mx-auto mt-10 bg-black p-4 rounded-lg shadow-lg">
//       <div className="relative w-full h-64 overflow-hidden rounded-md">
//         {currentMedia.type === 'video' ? (
//           <video
//             src={currentMedia.src}
//             autoPlay
//             loop
//             controls
//             className="w-full h-full object-cover"
//           />
//         ) : (
//           <img
//             src={currentMedia.src}
//             alt={`Slide ${currentIndex + 1}`}
//             className="w-full h-full object-cover"
//           />
//         )}
//       </div>
//       <div className="flex justify-between mt-2">
//         <button
//           onClick={nextMedia}
//           className="px-4 py-2 bg-blue-500 text-white rounded-md"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TV;



