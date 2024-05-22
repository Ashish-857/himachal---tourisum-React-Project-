import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbr from './components/Navbr';
import Loading from './Loading';
import Home from './components/Home';
import About from './components/About';
import Howtoreach from './components/Howtoreach';
import Tourist from './components/Tourist';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import Api from './components/Api';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data)
    setTimeout(() => {
      setIsLoading(false);
    }, 3300); // Change this duration as needed
  }, []);

  return (
    <>
      {/* <Api/> */}
      <div className="App">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Navbr />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Howtoreach" element={<Howtoreach />} />
              <Route path="/Tourist" element={<Tourist />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </>
  );
}

export default App;
