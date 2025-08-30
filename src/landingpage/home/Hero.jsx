import React from 'react';

function Hero() {
    return (
        <div className='container '>
            <div className='row  mt-5 text-center '>
                <img src="/homeHero.png" alt="hero" style={{width:"60%", margin:"0 auto ",marginTop:"70px",   marginBottom:"60px"}} />
                <h1 className='fs-3 '>Invest in everything</h1>
                <p className='mb-5' style={{fontSize:"20px"}}>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='btn btn-primary mb-5' style={{width:"15%", height:"50px", margin:"0 auto", borderRadius:"5px", fontSize:"19px" }}>Sign up for free</button>
            </div>

        </div>
      );
}

export default Hero;