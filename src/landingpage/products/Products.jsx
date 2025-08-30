import React from 'react';
import Hero from './Hero';
import Universe from './Universe';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

function Products() {
    return ( 
        <>
        <Hero/>     
        <LeftSection 
        imageurl="/kite.png" 
        title="kite" 
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices"
        trydemo="#"
        learnmore="#"
        googlePlayBadge="#"
        appstoreBadge="#"
        
        />
        <RightSection
        imageurl="/console.png" 
        title="Console" 
        description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnmore="#"
        

        />

       <LeftSection 
        imageurl="/coin.png" 
        title="Coin" 
        description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        trydemo="#"
        learnmore="#"
        googlePlayBadge="#"
        appstoreBadge="#"
        
        />
        <RightSection
        imageurl="/kiteconnect.png" 
        title="Kite Connect API" 
        description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnmore="#"
        

        />

        <LeftSection 
        imageurl="/varsity.png" 
        title="Varsity mobile" 
        description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        trydemo="#"
        learnmore="#"
        googlePlayBadge="#"
        appstoreBadge="#"
        
        />
        <p className='fs-5 text-center pb-5' >Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>

         <Universe/>
        
        </>
        
     );
}

export default Products;