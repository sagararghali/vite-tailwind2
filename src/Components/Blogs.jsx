// ./src/components/Blogs.jsx
import React from 'react';
import BlogPost from './BlogPost';
import Navbar from './Navbar';

const Blogs = () => {
  const blogPosts = [
    {
      title: 'The Rise of Indie Comics',
      author: 'Jane Doe',
      date: 'July 25, 2024',
      description: 'Indie comics are gaining popularity due to their unique storytelling and artistic styles. In this post, we explore the rise of indie comics and their impact on the comic industry.',
    },
    {
      title: 'Top 10 Superheroes of All Time',
      author: 'John Smith',
      date: 'July 20, 2024',
      description: 'From Superman to Spider-Man, these superheroes have captured the hearts of millions. Here are our top 10 superheroes of all time.',
    },
    {
      title: 'The Evolution of Comic Book Art',
      author: 'Alice Johnson',
      date: 'July 18, 2024',
      description: 'Comic book art has evolved significantly over the decades. This post takes a look at how comic book art has changed and the artists who have shaped it.',
    },
  ];

  return (
    <>
        <Navbar title="Comic World"/>

    <div className="min-h-screen bg-gray-100 p-8 bg-cover bg-center bg-[url('/464908.jpg')]">
      
      <h1 className="text-4xl font-bold text-center mb-8 text-green-400">Comic Blog</h1>
      <div className="max-w-4xl mx-auto">
        {blogPosts.map((post, index) => (
          <BlogPost 
            key={index} 
            title={post.title} 
            author={post.author} 
            date={post.date} 
            description={post.description} 
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default Blogs;
