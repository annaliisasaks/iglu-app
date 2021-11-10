import React from 'react';
import './list.scss';

interface Props {
  children: React.ReactNode
  className?: string;
  direction?:'horizontal';
  type?:'bullets' | 'hashtags';
}

const List = (props: Props):JSX.Element => {
  const {
    children, className, direction, type,
  } = props;

  const BEM = (): string => {
    const classArray:string[] = ['list'];

    if (direction) {
      classArray.push(`list--${direction}`);
    }
    if (type) {
      classArray.push(`list--${type}`);
    }
    if (className) {
      classArray.push(className);
    }

    return classArray.join(' ');
  };
  return (
    <ul className={BEM()}>
      {children}
    </ul>
  );
};
export default List;
