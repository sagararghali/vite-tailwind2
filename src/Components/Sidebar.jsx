// ./src/components/Sidebar.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FiMenu, FiX } from 'react-icons/fi';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex ">
      <div className={`fixed top-2 rounded-2xl left-0 bg-gray-800 text-center text-white w-60 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="p-4">
          <h2 className="text-2xl font-semibold">Menu</h2>
          <nav className="mt-4">
          <Link to="homepage"> <li className='block py-2 px-4 rounded hover:bg-green-700'>Home</li></Link>
        <Link to="/aboutpage"><li className='block py-2 px-4 rounded hover:bg-green-700'>About</li></Link>
        <Link to="blogspage"><li className='block py-2 px-4 rounded hover:bg-green-700'>Blogs</li></Link>
       <Link to="contactpage"> <li className='block py-2 px-4 rounded hover:bg-green-700'>Contact</li></Link>
       <Link to="loginpage"> <li className='block py-2 px-4 rounded hover:bg-green-700'>Login</li></Link>
          </nav>
        </div>
      </div>
      <div className="flex">
        <button onClick={toggleSidebar} className="p-4  right-6 focus:outline-none focus:bg-gray-300 fixed bg-white rounded-full shadow-md">
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
        
      </div>
    </div>
  );
};

export default Sidebar;















