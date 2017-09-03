import { compose, withReducer } from 'recompose';
import { connect } from 'react-redux';
import Counter from './Counter';
import { operateCounter } from '../../reducers/actions/counter'

const mapStateToProps = state => ({
  number: state.numberCounter
});

const mapDispatchToProps = dispatch => {
  return {
    onButtonClick: type => {
      dispatch(operateCounter(type))
    }
  }
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Counter);
