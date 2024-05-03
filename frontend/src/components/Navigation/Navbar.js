import React from 'react';
import { Link } from 'react-router-dom';
import profile from './profile.png';
import cart from './cart.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container">
        <Link className="navbar-brand" to="/">
        BuhayBukidBiz
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/createOrder">
                Buy Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/my-cart">
               
                <img src={cart} alt="Logo" style={{ maxHeight: '30px', marginRight: '10px' }} />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
               
                <img src={profile} alt="Logo" style={{ maxHeight: '30px', marginRight: '10px' }} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
