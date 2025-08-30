import React from 'react';
import '../index.css';
import {Link} from 'react-router-dom';


function Navbar() {
    return ( 
        <nav class="navbar navbar-expand-lg border-bottom p-2 pb-2 pt-2      fixed-top"  style={{backgroundColor:"white" , zIndex:"1"}}>
  <div class="container-fluid">
    <Link class="navbar-brand " style={{marginLeft:"13%"}} to="/"><img src="/logo.svg" alt="" style={{width:"130px "}} /></Link>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active  text-muted" aria-current="page" to="/signup">Signup</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active  text-muted" aria-current="page" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active  text-muted" aria-current="page" to="/products">Products</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active  text-muted" aria-current="page" to="/priceing">Priceing</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active  text-muted" aria-current="page" to="/support">Support</Link>
        </li>
        <li class="nav-item mt-2  ms-5">
            <i class="fa-solid fa-bars"></i>
        </li>
      
        
      </ul>
      <form class="d-flex" role="search">
        
      </form>
    </div>
  </div>
</nav>
     );
}

export default Navbar;