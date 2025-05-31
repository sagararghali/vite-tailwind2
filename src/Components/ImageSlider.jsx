import TV from './TV';
// import image1 from './Components/imagess/comic.webp'; trying to import image from src folder
import React, { useState, useEffect } from 'react';

const images = [
'692439.jpg',//importing images directly from the public folder
  '724132.jpg',
  '1336451.jpg',
  '1356453.jpeg',
  '270963.jpg',
  '1229450.jpg',
  '1322349.jpg',
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
<>
<div className=' mt-8 flex'> 

<div className='grid relative justify-items-center'>
<p className='mt-10 p-4 text-3xl text-green-800 font-bold'>Enjoy on your TV, <br/> Mobile and any <br/> other devices </p>
<p className='p-4 mb-12 text-lg'>Watch on Smart TVs, Playstation,<br/> Apple TV, Blu-ray players, and more.</p>
<div className=''>
  <TV/>
</div>
</div>
{/* image slider started */}
    <div className=" hidden md:flex relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg shadow-lg md-none">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index + 1}`} className="w-full flex-shrink-0" />
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition duration-300"
      >
        &#10094;
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition duration-300"
      >
        &#10095;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
          ></button>
        ))}
      </div>
    </div>
{/* image slider ends */}
   
    <div>
<p className='mt-10  p-4 text-3xl text-green-800 font-bold'>Unlimited Movies</p>
<p className='p-4 text-lg'>Watch anywhere. Cancel anytime.</p>
<p className='p-4 '> <strong>Ready to watch?</strong> <br/>Enter your email to create, <br/> restart your membership.</p>

<input
  className="mt-4 ml-5 bg-[#222630] px-4 py-3 outline-none w-[210px] text-green-200 rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
  name="text"
  placeholder="Enter email or username"
  type="text"
/>

<button
  className="ml-16 mt-1 relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-green-500 rounded-md group"
>
  <span
    className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-700 rounded group-hover:-mr-4 group-hover:-mt-4"
  >
    <span
      className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
    ></span>
  </span>
  <span
    className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-700 rounded group-hover:-ml-4 group-hover:-mb-4"
  >
    <span
      className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
    ></span>
  </span>
  <span
    className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-green-600 rounded-md group-hover:translate-x-0"
  ></span>
  <span
    className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
    >Get Started</span>
</button>
</div>

</div>
    </>
  );
}

export default ImageSlider;
