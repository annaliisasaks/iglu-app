import React, { useState } from 'react';
import SubmitButton from '../Form/SubmitButton';
import './search.scss';

interface Props {
    onButtonClick: (value: string) => void;
}
const Search = (props: Props):JSX.Element => {
  const [searchTerm, setSearchTerm] = useState('');
  const { onButtonClick } = props;
  const handleSubmit = (e: React.MouseEvent):void => {
    e.preventDefault();
    onButtonClick(searchTerm);
  };

  return (
    <form className="search" action="/" method="get">
      <input
        className="search__input"
        type="text"
        name="search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <SubmitButton className="search__button" onClick={handleSubmit}>
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21.6504 20.1774L14.6942 13.2211C15.7736 11.8256 16.3576 10.1193 16.3576 8.32469C16.3576 6.17647 15.5192 4.16219 14.0031 2.64344C12.487 1.12469 10.4674 0.288971 8.32185 0.288971C6.17631 0.288971 4.15667 1.12736 2.6406 2.64344C1.12185 4.15951 0.286133 6.17647 0.286133 8.32469C0.286133 10.4702 1.12453 12.4899 2.6406 14.0059C4.15667 15.5247 6.17363 16.3604 8.32185 16.3604C10.1165 16.3604 11.8201 15.7765 13.2156 14.6997L20.1718 21.6533C20.1922 21.6737 20.2165 21.6899 20.2431 21.7009C20.2698 21.7119 20.2983 21.7176 20.3272 21.7176C20.3561 21.7176 20.3846 21.7119 20.4113 21.7009C20.4379 21.6899 20.4622 21.6737 20.4826 21.6533L21.6504 20.4881C21.6708 20.4677 21.687 20.4435 21.6981 20.4168C21.7091 20.3901 21.7148 20.3616 21.7148 20.3327C21.7148 20.3039 21.7091 20.2753 21.6981 20.2486C21.687 20.222 21.6708 20.1978 21.6504 20.1774ZM12.5647 12.5675C11.429 13.7006 9.92363 14.3247 8.32185 14.3247C6.72006 14.3247 5.2147 13.7006 4.07899 12.5675C2.94595 11.4318 2.32185 9.92647 2.32185 8.32469C2.32185 6.7229 2.94595 5.21486 4.07899 4.08183C5.2147 2.94879 6.72006 2.32469 8.32185 2.32469C9.92363 2.32469 11.4317 2.94611 12.5647 4.08183C13.6977 5.21754 14.3218 6.7229 14.3218 8.32469C14.3218 9.92647 13.6977 11.4345 12.5647 12.5675Z" fill="white" />
        </svg>

      </SubmitButton>

    </form>

  );
};

export default Search;
