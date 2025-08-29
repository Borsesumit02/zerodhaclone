import React from 'react';

function Notforview() {
    return ( 
      <div className='notforview  '>
       <h1 className=' p-5 align-center'>This website <br /> is not responsive on <br />smaller screens</h1>

       <img  style={ {width:"20%", paddingLeft:"10%"}} src="https://cdn-icons-png.flaticon.com/512/5578/5578703.png" alt="" />
      </div>


     );
}

export default Notforview;