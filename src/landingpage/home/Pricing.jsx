import React from 'react';

function Pricing() {
    return ( 
        <div className='container p-5 pt-0'>
             <div className='row p-5'>
                  <div className='col-5 '>
                     <h2 className='mb-3 fs-4'>Unbeatable pricing</h2>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                     <a className='' href=""  style={{textDecoration:"none"}}>See pricing<i className=" m-2 fa-solid fa-arrow-right"></i></a>
                  </div>
                  <div className='col-7 pt-5 d-flex'>
                    <div  className='container'>
                       <div className='row'>

                          <div className='col-2 '><img src="public\pricing-eq.svg" alt="" style={{ width:"110px", }} /> </div>
                          <div className='col-2  mt-5'><p style={{fontSize:"10px" , }}>Free account opening</p> </div>
                          <div className='col-2 '><img src="public\pricing-eq (1).svg" alt="" style={{ width:"110px"}} /> </div>
                          <div className='col-2  mt-5' > <p style={{fontSize:"10px"}}>Free equity deliveryand direct mutual funds</p></div>
                          <div className='col-2 '><img src="public\other-trades.svg" alt="" style={{ width:"110px"}} /></div>
                          <div className='col-2 mt-5 pe-5 '> <p style={{fontSize:"10px"}}> Intraday and
F&O</p></div>

                       </div>
                    </div>






                      
                      
                  </div>

             </div>
        </div>
     );
}

export default Pricing;