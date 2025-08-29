import React from 'react';

function Awards() {
    return ( 
        
        <div className='container p-5 '>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h2 className='fs-3 mb-5'>Trust with confidence</h2>
                    <h3 className='fs-5'>Customer-first always</h3>
                    <p className='text-muted'style={{fontSize:"18px"}}>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India</p>

                     <h3 className='fs-5'>No spam or gimmicks</h3>
                    <p className='text-muted'style={{fontSize:"18px"}}>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>

                     <h3 className='fs-5'>The Zerodha universe</h3>
                    <p className='text-muted'style={{fontSize:"18px"}}>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                     <h3 className='fs-5'>Do better with money</h3>
                    <p className='text-muted'style={{fontSize:"18px"}}>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>

                <div className='col-6 mt-5'>
                    <img src="public\ecosystem.png" alt="" style={{width:"100%"}} />
                    <a className='mx-5' href=""  style={{textDecoration:"none",color:"blue"}}>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                    <a href="" style={{textDecoration:"none",color:"blue"}}>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <img  style={{width:"70%" , margin:"0 auto "}} src="public\pressLogos.png" alt="" />
            </div>
        </div>
     );
}

export default Awards;