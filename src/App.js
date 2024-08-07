import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';
import Home from './components/Home/Home'; 
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import MyWork from './components/MyWork/MyWork';
import Contact from './components/Contact/Contact';
import './App.css';

const App = () => (
  <Router>
    <div>
      <SideBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/mywork' element={<MyWork />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  </Router>
);

export default App;
