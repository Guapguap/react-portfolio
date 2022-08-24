import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Resume from './components/Resume';
import About from './components/About';
import Projects from './components/Projects'
import Contact from './components/Contact'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
    <div>
    <Header/>
    <Routes>
        <Route path="/" element={<About/>}>
        <Route path="resume" element={<Resume/>} />
        <Route path="project" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
    <Footer />
    </div>
  </BrowserRouter>
  );
}


