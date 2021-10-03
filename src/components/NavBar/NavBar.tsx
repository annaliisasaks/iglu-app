import React, { useState } from 'react';
import NavBarItem from './components/NavBarItem/NavBarItem';

import './navBar.css';

const menuItems: string[] = ['Home', 'Blog', 'Events', 'Gallery'];

const NavBar: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('Home');

  return (
    <div className="navbar">
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
          {menuItems.map((menuItem, index) => (
            <NavBarItem
              key={index}
              navLink={menuItem}
              isActive={selectedTab === menuItem}
              onClick={setSelectedTab}
            />
          ))}
          <label htmlFor="toggle-btn" className="menu-btn cross">
            <div className="ham bur" />
            <div className="bur ger" />
          </label>
        </ul>
      </nav>
    </div>

  );
};

export default NavBar;
