import { compose, withState, withHandlers } from 'recompose';
import withClickOutside from 'react-onclickoutside';
import SearchBox from './SearchBox';

const submitForm = keyword => alert(keyword);
const mapList = [
  'สีลม',
  'Silom Complex',
  'สยาม',
  'Digital Gateway'
]

export default compose(
  withState('keyword', 'updateKeyword', ''),
  withState('isActive', 'updateIsActive', false),
  withState('mapList', 'updateMapList', mapList),
  withHandlers({
    onChange: ({ updateKeyword, updateIsActive }) => event => {
      updateKeyword(event.target.value);
    },
    onSubmit: ({ keyword }) => event => {
      event.preventDefault()
      submitForm(keyword)
    },
    onClick: ({ updateIsActive }) => event => {
      updateIsActive(true);
    },
    onDropDownClick: ({ updateKeyword, updateIsActive }) => value => () => {
      updateKeyword(value);
      updateIsActive(false);
    },
    handleClickOutside: ({ updateIsActive }) => event => {
      updateIsActive(false);
    }
  }),
  withClickOutside
)(SearchBox);