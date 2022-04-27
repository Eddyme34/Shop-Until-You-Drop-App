import React, { useState, useRef, useEffect } from 'react';
import university from './schoolList';

const SearchbarDropdown = (props) => {
  const { options, onInputChange } = props;
  const ulRef = useRef(null);
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.addEventListener('click', (event) => {
      event.stopPropagation();
      ulRef.current.style.display = 'flex';
      onInputChange(event);
    });
    document.addEventListener('click', (event) => {
      ulRef.current.style.display = 'none';
    });
  }, []);
  return (
    <div className="search-bar-dropdown">
      <input
        type="text"
        className="UniInput"
        placeholder="Search"
        ref={inputRef}
        onChange={onInputChange}
      />
      <ul id="results" className="list-group" ref={ulRef}>
        {options.map((option, index) => {
          return (
            <button
              type="button"
              key={index}
              onClick={(e) => {
                inputRef.current.value = option;
              }}
              className="uniDropdown"
            >
              {option}
            </button>
          );
        })}
      </ul>
    </div>
  );
};

function Dropdown() {
  const [inputValue, setInputValue] = useState([]);
  const onInputChange = (event) => {
    setOptions(
      university.filter((university) => university.includes(event.target.value))
    );
  };

  return (
    <div>
      <SearchbarDropdown options={inputValue} onInputChange={onInputChange} />
    </div>
  );
}

export default Dropdown;