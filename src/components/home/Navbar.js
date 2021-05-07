import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { logout } from "../../Store/AccessTokenStore"
import { makeStyles } from '@material-ui/core/styles';

import './Navbar.css';

const useStyles = makeStyles((theme) => ({
  btn:{
    height: 35,
    margin: theme.spacing(3),
    background: "#44A1A0",
    color: "#fff",
    "&:hover": {
    background: "#0D5C63",
    color: "#fff",
  }
}
}))

function Navbar() {
  const classes = useStyles();

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

            { !user ? (
              <>
              <li className="nav-item">
                  <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
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
                <li className="nav-item">
                <Link
                  to="/profile"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Profile
                </Link>
                </li>
                <li className="nav-item">
               <Link
                 to="/search"
                 className="nav-links"
                 onClick={closeMobileMenu}
               >
                 Search
               </Link>
               </li>
                   <Button
                  aria-controls="customized-menu"
                  variant="contained"
                  onClick={logout}
                  className={classes.btn}
                  size="small"
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