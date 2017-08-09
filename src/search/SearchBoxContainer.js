import { compose, withState } from 'recompose';
import SearchBox from './SearchBox';

export default compose(
  withState('keyword', 'updateKeyword', 'Hello')
)(SearchBox);