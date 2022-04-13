import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
  return (
    <header className='header'>
      <div className='container header-container'>
        <div className='logo'>
          <a href='/'>
            <img src={logo} alt='' />
          </a>
        </div>
        <nav>
          <a href='/shop'>Shop</a>
          <a href='/orders'>Orders</a>
          <a href='/inventory'>Inventory</a>
          <a href='/about'>About</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
