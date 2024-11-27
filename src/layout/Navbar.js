import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
return (
    <div>

<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#" to="/">Mastering the Art of Cloth Alteration</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
          <img src='./image/Alteration1.png' width={182} height={64} />
          <img src='./image/Alteration2.png' width={182} height={64} />
          <img src='./image/Alteration3.png' width={182} height={64} />
          <img src='./image/Alteration4.png' width={182} height={64} />
          
    
      <Link className="btn btn-outline-light" to="/addcustomer">Add Customer Details</Link>
  </div>
</nav>

  <nav class="navbar navbar-default navbar-dark bg-dark">
  <div class="container-fluid">
    <ul class="navbar-nav">
      <li class="nav-item">
      <Link to="/about">About</Link>
      </li>
      <li class="nav-item">
      <Link to="/services">Services</Link>
      </li>
      <li class="nav-item">
      <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
</nav>

    </div>
)

}