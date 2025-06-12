// ./src/components/Timeline.jsx
import React from 'react';

const Timeline = () => {
  const events = [
    {
      date: "July 25, 2021",
      title: "Comic Haven Launch",
      description: "Comic Haven was launched to bring the latest comic news and reviews to fans worldwide.",
    },
    {
      date: "August 14, 2022",
      title: "First Major Interview",
      description: "We conducted our first major interview with a renowned comic book artist, bringing exclusive insights to our readers.",
    },
    {
      date: "September 30, 2023",
      title: "100th Comic Review Published",
      description: "We reached a milestone of 100 comic reviews, covering a wide range of genres and styles.",
    },
    {
      date: "January 15, 2024",
      title: "Launch of Indie Comics Section",
      description: "We launched a dedicated section for indie comics, supporting and showcasing emerging talent.",
    },
    {
      date: "Today, 2024",
      title: "Upcoming Update",
      description: "Stay connected with us to read and watch latest books, comics and movies in your own website",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100  py-8">
      <div className="max-w-4xl mx-auto min-h-screen  bg-cover bg-center bg-[url('/1008721.png')] shadow-md rounded-lg p-6">
        <h1 className="text-5xl font-bold text-center text-white mb-8">Our Journey</h1>
        <div className="relative">
         {/* centerline */}
          <div className="border-r-4 border-green-600 absolute h-full top-0 left-1/2 transform -translate-x-1/2"></div>
          <ul className="list-none m-0 p-0">
            {
            events.map((event, index) => (
              <li key={index} className={`mb-8 flex ${index % 2 === 0 ? "flex-row-reverse" : ""} items-center`}>
                <div className="w-1/2 px-2 transform transition-all duration-500  hover:scale-105 ">
                  <div className={`bg-white shadow-lg rounded-lg p-6 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
                    <span className="text-gray-500">{event.date}</span>
                    <p className="text-gray-700 mt-2">{event.description}</p>
                  </div>
                </div>
                <div className="w-1/2 flex justify-center relative">
                  <div className="bg-green-500 h-8 w-8 rounded-full border-4 border-white absolute top-1/2 transform -translate-y-1/2"></div>
                </div>
              </li>
            ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Timeline;
