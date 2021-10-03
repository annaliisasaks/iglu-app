import React from 'react';
import './birthdayListItem.css';
import { Bd } from '../../../../../data/sidebar/sidebarData';

const BirthdayListItem: React.FC<Bd> = (props: Bd) => {
  const {
    date, name, image, isGoing, isTomorrow,
  } = props;
  return (

    <div className="bd-list-item">
      <img className="bd-img" src={image} alt={name} />
      <div className="bd-data">
        <p className="bd-name">{name}</p>
        <span>{date}</span>
        {isGoing && (
        <>
          <span className="le-dot"> • </span>
          <span className="bd-green">Going</span>
        </>
        )}
        {isTomorrow && (
        <>
          <span className="le-dot"> • </span>
          <span className="bd-red">Tomorrow</span>
        </>
        )}
      </div>
    </div>

  );
};

export default BirthdayListItem;
