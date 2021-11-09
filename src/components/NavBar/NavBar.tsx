import React, { FC, useState } from 'react';
import List from '../List/List';
import NavBarItem from './components/NavBarItem/NavBarItem';

import './navBar.scss';

const menuItems: string[] = ['Home', 'Blog', 'Events', 'Gallery'];

const NavBar: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('Home');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const renderNavButton = (opened:boolean): JSX.Element => (
    opened ? (
      <div className="cross">
        <div className="cross__line" />
        <div className="cross__line" />
      </div>

    ) : (
      <div className="burger">
        <div className="burger__line" />
        <div className="burger__line" />
        <div className="burger__line" />
      </div>
    )
  );

  return (
    <header className="header">
      <nav className="navbar">
        <button
          className="navbar__btn"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {renderNavButton(isMenuOpen)}
          <p>Menu</p>

        </button>

        <List
          className={`navbar__navigation ${isMenuOpen ? 'navbar__navigation--open' : ''}`}
        >
          {menuItems.map((menuItem, index) => (
            <NavBarItem
              key={index}
              navLink={menuItem}
              isActive={selectedTab === menuItem}
              onClick={setSelectedTab}
            />
          ))}
        </List>
      </nav>
    </header>

  );
};

export default NavBar;
