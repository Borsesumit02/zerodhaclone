import React from 'react';

function LeftSection( {imageurl,title, description,trydemo,learnmore,googlePlayBadge,appstoreBadge}) {
    return ( 
        <div className='container p-5 pt-5'>
            <div className='row p-5 pt-0 mt-5'>
              <div className='col-6'>
                <img style={{width:"100%"}} src={imageurl} alt="" />
              </div>
              
              <div className='col-1 p-0 m-0'></div>

               <div className='col-5 p-5'>
                <h2 className='fs-4 mb-3'>{title}</h2>
                <p style={{ lineHeight:"1.8rem"}}>{description}</p>
                <div className='pb-3'>
                 <a href={trydemo} style={{textDecoration:"none",color:"blue" , paddingRight:"60px" }}>Try demo<i class="fa-solid fa-arrow-right"></i></a>
                <a href={learnmore} style={{textDecoration:"none",color:"blue"}}>Learn more<i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='pt-3' >
                 <a href={googlePlayBadge} style={{  paddingRight:"25px" }}><img  style={{ width:"40%"}} src="/googlePlayBadge.svg" alt="" /></a>
                <a href={appstoreBadge}><img style={{ width:"40%"}} src="/appstoreBadge.svg" alt="" /></a>
                </div>
                </div>
            </div>

        </div>
     );
}

export default LeftSection;