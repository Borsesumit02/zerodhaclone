import React from 'react';

function Universe() {
    return (  
       
        <div style={{paddingLeft:"100px"}} className='container  p-5'>
          <div className='row text-center p-5 px-5'>
               
                <h3 className='pb-3'>The Zerodha Universe</h3>
            <p>Extend your trading and investment experience even further with our partner platforms</p>
             <div className='col-4 p-3 px-1 '>
             <img style={{height:"55px " , padding:"2px" , margin:"15px"}}   src="public\zerodhaFundhouse.png" alt="" />
           <p  style={{fontSize:"12px"}} >Our asset management venture <br />
that is creating simple and transparent index <br />
funds to help you save for your goals.

</p>
  
             </div>
            <div className='col-4 p-3 px-1'>
             <img  style={{height:"40px" , margin:"15px" }}  src="public\sensibullLogo.svg" alt="" />
             <p style={{fontSize:"12px"}} >Options trading platform that lets you <br />
create strategies, analyze positions, and examine <br />
data points like open interest, FII/DII, and more. <br />


</p>
            </div>
            <div className='col-4 p-3 px-1'>
              <img  style={{height:"55px" , margin:"15px"}}  src="public\tijori.svg" alt="" />
              <p style={{fontSize:"12px"}} >Investment research platform <br />
that offers detailed insights on stocks, <br />
sectors, supply chains, and more. <br />


</p>
            </div>
            <div className='col-4 p-3  px-1'>
             <img  style={{height:"55px" , margin:"15px"}}  src="public\streak-logo.png" alt="" />
             <p style={{fontSize:"12px"}} >Systematic trading platform <br />
that allows you to create and backtest <br />
strategies without coding. <br />

</p>
            </div>
            <div className='col-4 p-3 px-1'>
             <img   style={{height:"55px" , margin:"15px"}} src="public\smallcaselogo.png" alt="" />
             <p style={{fontSize:"12px"}} >Thematic investing platform <br />
that helps you invest in diversified <br />
baskets of stocks on ETFs. <br />

</p>
            </div>
            <div className='col-4 p-3 px-1'>
             <img  style={{height:"55px" , margin:"15px"}}  src="public\dittoLogo.png" alt="" />
             <p style={{fontSize:"12px"}} >Personalized advice on life <br />
and health insurance. No spam <br />
and no mis-selling.


</p>  

            </div>
            
<button className='btn btn-primary  mt-5 mb-5' style={{width:"15%", height:"50px", margin:"0 auto", borderRadius:"5px", fontSize:"19px" }}>Sign up for free</button>
          </div>
  
        </div>
    );
}

export default Universe;