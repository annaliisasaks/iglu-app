import React from 'react';
import './textfield.scss';

interface Props {
  className?:string,
  type: 'text' | 'number',
  name:string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  value?: string,
  placeholder?:string
}

const Textfield = (props: Props):JSX.Element => {
  const {
    className, type, name, onChange, value, placeholder,
  } = props;
  return (
    <input className={`textfield ${className}`} type={type} name={name} onChange={onChange} value={value || ''} placeholder={placeholder} />
  );
};
export default Textfield;
