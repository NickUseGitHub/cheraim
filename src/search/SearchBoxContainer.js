import { compose, withState, withHandlers } from 'recompose';
import withClickOutside from 'react-onclickoutside';
import SearchBox from './SearchBox';

const submitForm = keyword => alert(keyword);

export default compose(
  withState('keyword', 'updateKeyword', ''),
  withState('isActive', 'updateIsActive', false),
  withState('mapList', 'updateMapList', [1, 2, 3, 4]),
  withHandlers({
    onChange: ({ updateKeyword }) => event => {
      updateKeyword(event.target.value);
    },
    onSubmit: ({ keyword }) => event => {
      event.preventDefault()
      submitForm(keyword)
    },
    onClick: ({ updateIsActive }) => event => {
      updateIsActive(true);
    },
    handleClickOutside: ({ updateIsActive }) => event => {
      updateIsActive(false);
    }
  }),
  withClickOutside
)(SearchBox);