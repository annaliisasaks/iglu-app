import React from 'react';
import { Link } from 'react-router-dom';
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
    onClick(navLink);
  };

  return (
    <ListItem className="header__nav-item">
      <Link
        to={`/${navLink.toLowerCase().replace(/\s/g, '')}`}
        onClick={handleClick}
        className={`header__nav-link ${isActive ? 'header__nav-link--active' : ''}`}
      >
        {navLink}
      </Link>
    </ListItem>
  );
};

export default NavBarItem;
