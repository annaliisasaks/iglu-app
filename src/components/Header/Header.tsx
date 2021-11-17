import React, { useState } from 'react';
import List from '../List/List';
import NavBarItem from './Navbar/NavBarItem';

import './header.scss';

interface IMenuItems {
  name: string,
  path: string,
}
const menuItems: IMenuItems[] = [
  { name: 'Home', path: '/' },
  { name: 'Blog', path: '/blog' },
  { name: 'Events', path: '/events' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Add post', path: '/post/add' }];

const Header = ():JSX.Element => {
  const [selectedTab, setSelectedTab] = useState<string>('Home');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const renderNavButton = (opened:boolean): JSX.Element => (
    opened ? (
      <span className="cross">
        <span className="cross__line" />
        <span className="cross__line" />
      </span>

    ) : (
      <span className="burger">
        <span className="burger__line" />
        <span className="burger__line" />
        <span className="burger__line" />
      </span>
    )
  );

  return (
    <header className="header">
      <nav className="header__nav">
        <button
          className="header__btn"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {renderNavButton(isMenuOpen)}
          Menu
        </button>

        <List
          className={`header__nav-list ${isMenuOpen ? 'header__nav-list--open' : ''}`}
        >
          {menuItems.map((menuItem, index) => (
            <NavBarItem
              key={index}
              navLink={menuItem}
              isActive={selectedTab === menuItem.name}
              onClick={setSelectedTab}
            />
          ))}
        </List>

      </nav>

    </header>

  );
};

export default Header;
