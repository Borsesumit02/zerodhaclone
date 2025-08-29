import React from 'react';
function Education() {
    return ( 
        <div className='container  '>
            <div className='row p-5'>
                <div className='col-6'>
                <img src="public\education.svg" alt="" />




                </div>
                <div className='col-6 mt-5 '>
                <h2 className='mb-4 fs-4'>Free and open market education</h2>
                <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p><a className='' href=""  style={{textDecoration:"none", color:"blue"}}>Varsity 
<i className=" m-2 fa-solid fa-arrow-right"></i></a>
                <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p><a className='' href=""  style={{textDecoration:"none" ,color:"blue"}}>TradingQ&A 
<i className=" m-2 fa-solid fa-arrow-right"></i></a>



                </div>


            </div>

        </div>
     );
}

export default Education;