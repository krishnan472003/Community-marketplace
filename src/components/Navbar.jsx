import React from 'react';

export default function Navbar(){


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand fw-bold p-2" href="#">RENT NOW</a>

      <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link fw-bold" href="#">SELL</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#"><i className="fa-regular fa-user"></i></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#"><i className="fa-solid fa-cart-shopping"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  );

}
