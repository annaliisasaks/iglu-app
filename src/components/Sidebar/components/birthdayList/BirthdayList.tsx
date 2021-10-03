import React from 'react';
import BirthdayListItem from './birtdayListItem/BirthdayListItem';
import './birthdayList.css';
import { bdData } from '../../../../data/sidebar/sidebarData';

const BirthdayList: React.FC = () => (

  <div className="event-list">
    {bdData.map((item) => (
      <BirthdayListItem
        key={item.id}
        date={item.date}
        name={item.name}
        image={item.image}
        isGoing={item.isGoing}
        isTomorrow={item.isTomorrow}
      />
    ))}

  </div>

);

export default BirthdayList;
