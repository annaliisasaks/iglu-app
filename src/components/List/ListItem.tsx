import React from 'react';

interface Props {
  children: React.ReactNode
  className?: string
}

const ListItem: React.FC<Props> = (props: Props) => {
  const { children, className } = props;
  return (
    <li className={className}>
      {children}
    </li>
  );
};
export default ListItem;
