import React, { useState } from 'react';

function SearchBar({ onCityChange }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    if (inputValue.trim() !== '') {
      onCityChange(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="mb-4 d-flex justify-content-center">
      <input
        type="text"
        className="form-control w-50 me-2"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="أدخل المدينة ..."
      />
      <button className="btn btn-primary" onClick={handleSearch}>
        البحث 
      </button>
    </div>
  );
}

export default SearchBar;
