import React from 'react';

function Brokrage() {
    return (
       <div className='container p-5 m-5'>
          <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button style={{fontSize:"24px"}} class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Equity</button>
  </li>
  <li class="nav-item" role="presentation">
    <button style={{fontSize:"24px"}} class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Currency</button>
  </li>
  <li class="nav-item" role="presentation">
    <button style={{fontSize:"24px"}} class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Commodity</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
  
  <table >
     <thead>
        <tr>  
            <th> &nbsp;</th>
            <th>Equity delivery</th>
            <th>Equity intraday</th>
            <th>F&O - Futures</th>
             <th>F&O - Options</th>


        </tr>

     </thead>



  </table>



  </div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
</div>
 
       </div>
    );
}

export default Brokrage;