import React from 'react';
import './sideBarSection.scss';

interface Props { heading: string; children: React.ReactNode }

const SideBarSection: React.FC<Props> = (props: Props) => {
  const { heading, children } = props;

  return (

    <section className="section">
      <h3 className="section__header">{heading}</h3>
      <hr className="separator" />
      {children}
    </section>

  );
};

export default SideBarSection;
