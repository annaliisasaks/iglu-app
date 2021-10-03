import React from 'react';
import './newcomersListItem.css';
import { Newcomers } from '../../../../../data/sidebar/sidebarData';

const NewcomersListItem: React.FC<Newcomers> = (props: Newcomers) => {
  const {
    date, name, image,
  } = props;
  return (

    <div className="nc-list-item">
      <img className="nc-img" src={image} alt={name} />
      <div className="nc-data">
        <p className="nc-name">{name}</p>
        <span>{date}</span>

      </div>
    </div>

  );
};

export default NewcomersListItem;
