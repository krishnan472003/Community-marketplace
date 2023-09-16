import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand fw-bold p-2" href="#">RENT NOW</a>

  <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link fw-bold" href="#">SELL</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-dark" href="#"><i class="fa-regular fa-user"></i></a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-dark" href="#"><i class="fa-solid fa-cart-shopping"></i></a>
      </li>
    </ul>
  </div>
</nav>
        );
    }
}
export default Navbar;