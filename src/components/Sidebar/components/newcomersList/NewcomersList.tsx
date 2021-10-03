import React from 'react';
import NewcomersListItem from './newcomersListItem/NewcomersListItem';
import './newcomersList.css';
import { newcomersData } from '../../../../data/sidebar/sidebarData';

const NewcomersList: React.FC = () => (

  <div className="newcomers-list">
    {newcomersData.map((item) => (
      <NewcomersListItem
        key={item.id}
        date={item.date}
        name={item.name}
        image={item.image}
      />
    ))}
  </div>

);

export default NewcomersList;
