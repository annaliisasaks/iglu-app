import React from 'react';
import './submitButton.scss';

interface Props {
  children: React.ReactNode,
  className:string,
  onClick?: (e: React.MouseEvent) => void;

}

const Image = (props: Props):JSX.Element => {
  const { children, className, onClick } = props;

  return (
    <button className={`${className} submit-button`} type="submit" onClick={onClick}>{children}</button>
  );
};

export default Image;
