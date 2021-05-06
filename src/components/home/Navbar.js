import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { logout } from "../../Store/AccessTokenStore"

import './Navbar.css';

function Navbar() {
  const { user } = useContext(UserContext)
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

 


  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img
              className="header_icon"
              src="https://i.imgur.com/q1irFMR.png"
              alt=""
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            { !user ? (
              <>
                <li className="nav-item">
                <Link
                  to="/signin"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Sign In
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/signup"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>
              </li>
              </>
              ) : (
              <>
                <Button
                  onClick={logout}
                  className="btn btn-danger me-3 py-2 text-light text-decoration-none"
                >
                  Log out
                </Button>
              </>
            )
            }
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;