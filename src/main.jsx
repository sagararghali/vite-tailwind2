import React from 'react'
import App from './App.jsx'
import './index.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Components/About.jsx';
import Login from './Components/Login.jsx';
import Contact from './Components/Contact.jsx';
import Blogs from './Components/Blogs.jsx';


import Movie1 from './Components/Movie1.jsx';
import Blackwidow from './Components/Blackwidow.jsx';
import Theknight from './Components/Theknight.jsx';
import Thor2 from './Components/Thor2.jsx';
import Hovic from './Components/Hovic.jsx';
import Oppenheimer from './Components/Oppenheimer.jsx';
import Avatar from './Components/Avatar.jsx';
import Interstellar from './Components/Interstellar.jsx';
import Godzilla from './Components/Godzilla.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
 <>
 <Router>
   <Routes>
    <Route path="/" element={<App />} />
      <Route path="/aboutpage" element={<About/>} />
      <Route path="/loginpage" element={<Login/>} />
      {/* <Route path="/homepage" element={</>} /> */}
      <Route path="/blogspage" element={<Blogs/>} />
      <Route path="/contactpage" element={<Contact/>} /> 
      <Route path="/movie1" element={<Movie1/>} /> 
      <Route path="/blackwidow" element={<Blackwidow/>} /> 
      <Route path="/hovic1" element={<Hovic/>} /> 
      <Route path="/theknight" element={<Theknight/>} /> 
      <Route path="/thor2" element={<Thor2/>} /> 
      <Route path="/oppenheimer" element={<Oppenheimer/>} /> 
      <Route path="/avatar" element={<Avatar/>} /> 
      <Route path="/interstellar" element={<Interstellar/>} /> 
      <Route path="/godzilla" element={<Godzilla/>} /> 




  </Routes>
 </Router>
 </>
)

