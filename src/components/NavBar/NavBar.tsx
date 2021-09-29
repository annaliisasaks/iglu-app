import React from 'react';
import NavBarItem from './components/NavBarItem/NavBarItem';

import './navBar.css';

const NavBar: React.FC = () => (
  <div>
    <div className="burger-box" />
    <input type="checkbox" id="toggle-btn" />
    <label htmlFor="toggle-btn" className="menu-btn">
      <div className="burger" />
      <div className="burger" />
      <div className="burger" />
      <p>Menu</p>
    </label>

    <nav>
      <ul className="navigation">
        <li className="active">
          <NavBarItem navLink="Home" />

        </li>
        <li>
          <NavBarItem navLink="Blog" />

        </li>
        <li>
          <NavBarItem navLink="Events" />

        </li>
        <li>
          <NavBarItem navLink="Gallery" />

        </li>

        <label htmlFor="toggle-btn" className="menu-btn cross">
          <div className="ham bur" />
          <div className="bur ger" />
        </label>

      </ul>
    </nav>
  </div>

);

export default NavBar;
