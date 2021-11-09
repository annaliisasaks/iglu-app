import React from 'react';
import ListItem from '../../../List/ListItem';
import './navBarItem.css';

interface Props {
    navLink:string;
    isActive?: boolean;
    onClick: (e: string) => void;
}

const NavBarItem: React.FC<Props> = (props: Props) => {
  const { navLink, isActive = false, onClick } = props;

  const handleClick = (e: React.MouseEvent): void => {
    e.preventDefault();
    onClick(navLink);
  };

  return (
    <ListItem className="navbar__item">
      <a
        href="/"
        onClick={handleClick}
        className={`navbar__link ${isActive ? 'navbar__link--active' : ''}`}
      >
        {navLink}
      </a>
    </ListItem>
  );
};

export default NavBarItem;
