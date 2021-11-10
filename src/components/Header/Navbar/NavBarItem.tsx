import React from 'react';
import ListItem from '../../List/ListItem';
import './navBarItem.scss';

interface Props {
    navLink:string;
    isActive?: boolean;
    onClick: (e: string) => void;
}

const NavBarItem = (props: Props):JSX.Element => {
  const { navLink, isActive = false, onClick } = props;

  const handleClick = (e: React.MouseEvent): void => {
    e.preventDefault();
    onClick(navLink);
  };

  return (
    <ListItem className="header__nav-item">
      <a
        href="/"
        onClick={handleClick}
        className={`header__nav-link ${isActive ? 'header__nav-link--active' : ''}`}
      >
        {navLink}
      </a>
    </ListItem>
  );
};

export default NavBarItem;
