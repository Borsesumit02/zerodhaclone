import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mt-3  text-center border-bottom'> 
            <div className='row text-center p-5 mt-5'>
            <h3>Zerodha Products</h3>
            <p style={{fontSize:"20px"}} className='  pt-2'>Sleek, modern, and intuitive trading platforms</p>
            <p style={{fontSize:"16px"}} >Check out our <a href="" style={{textDecoration:"none",color:"blue"}}>investment offerings<i class="fa-solid fa-arrow-right"></i></a></p>
            </div>

        </div>
     );
}

export default Hero;