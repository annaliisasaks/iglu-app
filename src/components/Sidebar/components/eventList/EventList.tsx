import React from 'react';
import './eventList.css';
import EventListItem from './eventListItem/EventListItem';
import { eventData } from '../../../../data/sidebar/sidebarData';

const EventList: React.FC = () => (

  <div className="event-list">
    {eventData.map((event) => (
      <EventListItem
        key={event.id}
        date={event.date}
        name={event.name}
        location={{
          city: `${event.location.city}`,
          site: `${event.location.site}`,
        }}
        isGoing={event.isGoing}
        isTomorrow={event.isTomorrow}
      />
    ))}

  </div>

);

export default EventList;
