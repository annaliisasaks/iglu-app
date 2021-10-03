import React from 'react';
import './eventListItem.css';
import { Event } from '../../../../../data/sidebar/sidebarData';

const EventListItem: React.FC<Event> = (props: Event) => {
  const {
    date, name, location: { site, city }, isGoing, isTomorrow,
  } = props;
  return (

    <div className="event-list-item">
      <div className={isGoing
        ? 'event-circle event-circle-pink'
        : 'event-circle'}
      >
        {date}

      </div>
      <div className="event-data">
        <p className="event-name">{name}</p>
        <span>{site}</span>
        <span className="le-dot"> • </span>
        <span>{city}</span>
        {isGoing && (
        <>
          <span className="le-dot"> • </span>
          <span className="event-green">Going</span>
        </>
        )}
        {isTomorrow && (
        <>
          <span className="le-dot"> • </span>
          <span className="event-red">Tomorrow</span>
        </>
        )}
      </div>
    </div>

  );
};

export default EventListItem;
