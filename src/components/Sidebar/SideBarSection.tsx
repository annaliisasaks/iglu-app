import React from 'react';
import Separator from '../Separator/Separator';
import './sideBarSection.scss';

interface Props { heading: string; children: React.ReactNode }

const SideBarSection = (props: Props):JSX.Element => {
  const { heading, children } = props;

  return (

    <section className="section">
      <h3 className="section__header">{heading}</h3>
      <Separator type="div" />
      {children}
    </section>

  );
};

export default SideBarSection;
