import Header from './components/Header';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />

    <Routes>
      <Route path='/' element={<AboutMe />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/resume' element={<Resume />} />
    </Routes>

      <Footer />
    </div>
  );
}

export default App;
