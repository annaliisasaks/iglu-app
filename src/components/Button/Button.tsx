import React from 'react';
import './button.scss';

interface Props {
  children: React.ReactNode,
  className?:string,
  onClick?: (event: React.MouseEvent) => void,
  type?: 'submit'
  purpose: 'primary' | 'secondary' | 'delete'
}

const Image = (props: Props):JSX.Element => {
  const {
    children, className, onClick, type, purpose,
  } = props;

  const BEM = (): string => {
    const classArray:string[] = ['button'];

    if (purpose) {
      classArray.push(`button--${purpose}`);
    }

    if (className) {
      classArray.push(className);
    }

    return classArray.join(' ');
  };

  return (
    // eslint-disable-next-line react/button-has-type
    <button className={BEM()} type={type || 'button'} onClick={onClick}>{children}</button>
  );
};

export default Image;
