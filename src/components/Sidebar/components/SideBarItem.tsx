import React from 'react';
import './sideBarItem.css';

interface Props { child: React.ReactNode; heading: string;}

const SideBarItem: React.FC<Props> = (props: Props) => {
  const { heading, child } = props;

  return (

    <div className="sidebar-item">
      <p className="sidebar-item-header">{heading}</p>
      <hr />
      {child}
    </div>

  );
};

export default SideBarItem;
