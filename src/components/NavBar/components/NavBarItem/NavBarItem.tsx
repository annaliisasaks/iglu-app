import React from 'react';
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
    <li>
      <a
        href="/"
        onClick={handleClick}
        className={`nav-bar-item ${isActive ? 'active' : ''}`}
      >
        {navLink}
      </a>
    </li>
  );
};

export default NavBarItem;
