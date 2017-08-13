import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import './SearchBox.css';

export default class SearchBox extends Component {
  constructor(props) {
    super(props)
    this.state = { address: 'สีลม' }
    this.onChange = (address) => this.setState({ address })
  }
 
  handleFormSubmit = (event) => {
    event.preventDefault()
 
    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))
  }

  render () {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }

    return (
        <div className="SearchBox">
          <div className="SearchBox-Container">
            <form onSubmit={this.handleFormSubmit}>
              <PlacesAutocomplete inputProps={inputProps} />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      );
  }
}