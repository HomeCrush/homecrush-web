import React from 'react'
import './Header.css'
import Banner from './Banner';
import Navbar from './Navbar';

function Header() {
    return (
        <div className='h'>
        <Navbar />
        <Banner />
      </div>
    )
}

export default Header
