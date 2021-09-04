import React from 'react';
import Navbar from './navbar';
import "./index.css";
import Header from './Header';
import HowItWorks from './HowItWorks';
import About from './About';
import Services from './Services';
import About2 from './About2';
import Contact from './Contact';
import Footer from './Footer';



const Home = () => {
  return (
    <div>
      <Navbar />
       <Header/>
       <HowItWorks/>
       <About/>
       <Services/>
       <About2/>
       <Contact/>
       <Footer/>
       
    </div>
  );
};

export default Home;