import { compose, withState, withHandlers } from 'recompose';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import SearchBox from './SearchBox';

/**
 * google-place-autosuggestion ref: https://github.com/kenny-hibino/react-places-autocomplete
 */

export default compose(
  withState('address', 'updateAddress', 'สีลม'),
  withHandlers({
    onAddressChange: ({ updateAddress }) => address => {
      updateAddress(address);
    },
    handleFormSubmit: ({ address, updateCenter }) => event => {
      event.preventDefault()
 
      geocodeByAddress(address)
        .then(results => getLatLng(results[0]))
        .then(latLng => updateCenter(latLng))
        .catch(error => console.error('Error', error))
    }
  })
)(SearchBox);