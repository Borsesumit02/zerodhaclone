import React from 'react';

function Hero() {
    return (  
       <div className='container p-5 mt-3  pb-0  text-center'> 
            <div className='row text-center p-5 mt-5'>
            <h3>Charges</h3>
            <p style={{fontSize:"20px"}} className='text-muted pt-2'>List of all charges and taxes</p>
            
            </div>

            <div className='row p-5 m-5 '>
             <div className='col-4 p-2 '>
            <img style={{width:"80%"}} src="public\pricing-eq.svg" alt="" />
            <h3>Free equity delivery</h3>
            <h6  className='text-muted mt-4' style={{lineHeight:"1.8rem"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage</h6>
             </div>
              <div className='col-4 p-2 '>
            <img style={{width:"80%"}} src="public\other-trades.svg" alt="" />
            <h3>Intraday and F&O trades</h3>
            <h6 className='text-muted mt-4' style={{lineHeight:"1.8rem"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</h6>
             </div>
              <div className='col-4 p-2 '>
            <img style={{width:"80%"}} src="public\pricing-eq.svg" alt="" />
            <h3>Free direct MF</h3>
            <h6 className='text-muted mt-4' style={{lineHeight:"1.8rem"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</h6>
             </div>
             </div>
        </div>
    );
}

export default Hero;