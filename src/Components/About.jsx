// ./src/components/About.jsx
import React from 'react';
import Timeline from './Timeline';
import Navbar from './Navbar';
const About = () => {
  return (
    <>
    
    <div className=''>
    <Navbar title="Comic World"/>
    </div>
    <div className="  p-8  bg-center bg-cover bg-[url('1310205.jpeg')] ">
      <div className="max-w-4xl mx-auto bg-white opacity-85 shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <div className="text-black space-y-4">
          <p>
            Welcome to Comic Haven, your ultimate destination for everything comics! Our website is dedicated to bringing you the latest news, reviews, and insights from the world of comics. Whether you're a fan of superhero sagas, indie gems, or classic tales, we've got something for everyone.
          </p>
          <p>
            At Comic Haven, we believe in the power of storytelling through the vibrant and dynamic medium of comics. Our team of passionate writers and artists are committed to celebrating the art form and exploring its many facets. From detailed analysis of your favorite characters to exclusive interviews with creators, we aim to be your go-to source for comic book culture.
          </p>
          <p>
            Our mission is to create a community where comic enthusiasts can come together to share their love for the medium. We provide a platform for discussion, debate, and discovery, ensuring that every voice is heard and every story is told. Join us as we dive into the colorful world of comics and uncover the magic that lies within its pages.
          </p>
          <h2 className="text-2xl font-semibold mt-8">Our Team</h2>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="text-xl font-bold">Jane Doe</h3>
              <p>Founder & Editor-in-Chief</p>
              <p>
                Jane has been a comic book aficionado since childhood. With over a decade of experience in the industry, she brings her expertise and enthusiasm to Comic Haven, curating content that resonates with fans around the world.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">John Smith</h3>
              <p>Lead Writer</p>
              <p>
                John is a seasoned writer with a knack for uncovering hidden gems in the comic world. His insightful articles and reviews offer a fresh perspective on both mainstream and indie comics.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Alice Johnson</h3>
              <p>Creative Director</p>
              <p>
                Alice's artistic vision shapes the aesthetic of Comic Haven. With a background in graphic design and illustration, she ensures that our visual content is as compelling as the stories we tell.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Timeline/>
  </>
  );
};

export default About;

