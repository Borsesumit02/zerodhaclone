import React from 'react';

function OpenAccount() {
    return ( 
        <div className='container p-5'>
            <div className='row   p-5 pb-0 mt-3 text-center '>
               
                <h4>Open a Zerodha account</h4>
                <p className='m-3' style={{fontSize:"16px"}}>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className='btn btn-primary  mt-2 mb-5' style={{width:"15%", height:"50px", margin:"0 auto", borderRadius:"5px", fontSize:"19px" }}>Sign up for free</button>
            </div>

        </div>
     );
}

export default OpenAccount;