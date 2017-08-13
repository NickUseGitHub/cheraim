import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import './SearchBox.css';

export default (props) => {
  const {
    address,
    onAddressChange,
    handleFormSubmit
  } = props;

  const inputAutoCompletes = {
    value: address,
    onChange: onAddressChange,
  }

  return (
    <div className="SearchBox">
      <div className="SearchBox-Container">
        <form onSubmit={handleFormSubmit}>
          <PlacesAutocomplete inputProps={inputAutoCompletes} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}