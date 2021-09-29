import React from 'react';
import './navBarItem.css';

interface Props {
    navLink:string;
}

const NavBarItem: React.FC<Props> = (props: Props) => {
  const { navLink } = props;
  return (
    <>
      <a href="/" className="nav-bar-item">{navLink}</a>
    </>
  );
};

export default NavBarItem;
