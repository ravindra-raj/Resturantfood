import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/contact';
import About from './components/About';
import Menu from './components/menu.js';
import Footer from './components/Footer.js';
import Review from './components/Review.js';
// import ChatApp from './components/ChatApp';

const App = () => {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <Menu />
     <About/>
     <Contact/>
     <Review/>
     <Footer/>
    </div>
  );
}

export default App;
