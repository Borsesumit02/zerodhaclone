import React from 'react';

function RightSection( {imageurl,title, description,learnmore}) {
    return ( 
        <div className='container p-5 pt-0'>
            <div className='row    pt-0 '>
             
             <div  style={{}} className=' col-5 mx-auto p-5'>
                <h2 style={{paddingTop:"180px"}} className='fs-4 mb-3'>{title}</h2>
                <p style={{ paddingRight:"60px", lineHeight:"1.8rem"}}>{description}</p>
                <div className='pb-3'>
                
                <a href={learnmore} style={{textDecoration:"none",color:"blue"}}>Learn more<i class="fa-solid fa-arrow-right"></i></a>
                </div>
                
                </div>
             
             
             
              <div className='col-7 '>
                <img style={{width:"100%", paddingBottom:"10px"}} src={imageurl} alt="" />
              </div>
              
              

               
            </div>

        </div>
     );
}

export default RightSection;