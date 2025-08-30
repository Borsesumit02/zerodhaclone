import React from 'react';

function Team() {
    return ( 
        <div className='container  '>
            <div className='row p-5 pt-0 m-5'>
                <h1 className='fs-4  pt-0 text-center pb-5'>People</h1>
            <div style={{}} className='col-6 text-center'>
               <img  className='' style={{borderRadius:"100%", padding:"0", width:"50%"}} src="/nithinKamath.jpg" alt="" />
               <h4 className='fs-5 text-muted p-3'> Nithin Kamath</h4>
                 <p className=''> Founder, CEO</p>
            </div>
            <div className='col-6 '>
               <p> Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

          <p> He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

          <p> basketball is his zen.</p>

           <p> <a href="">Connect on Homepage</a> / <a href="">TradingQnA </a> / <a href=""> Twitter</a> </p>

            </div>


            </div>

        </div>
     );
}

export default Team;