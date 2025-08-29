import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import Pricing from './Pricing';
import Stats from './Stats';
import Education from './Education';
import Awards from './Awards';
import Footer from '../Footer';
import OpenAccount from '../OpenAccount';

function Home_page() {
    return ( 
        <>
         <Navbar/>
         <Hero/>
         <Awards/>
         <Pricing/>
         <Education/>
         <OpenAccount/>
         <Footer/>
        
        </>
     );
}

export default Home_page;