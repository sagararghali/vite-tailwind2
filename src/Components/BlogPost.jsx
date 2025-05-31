// ./src/components/BlogPost.jsx
import React from 'react';

const BlogPost = ({ title, author, date, description }) => {
  return (
    <div className="bg-white opacity-80 shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-3xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">By {author} on {date}</p>
      <p className="text-black font-bold ">{description}</p>
    </div>
  );
};

export default BlogPost;
