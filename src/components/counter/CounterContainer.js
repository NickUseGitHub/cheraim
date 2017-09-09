import { compose } from 'recompose';
import { connect } from 'react-redux';
import Counter from './Counter';
import { operateCounter } from '../../reducers/counter';
import { toggleV } from '../../reducers/toggleValue';

const mapStateToProps = state => ({
  number: state.numberCounter,
  toggleValue: state.toggleValue
});

const mapDispatchToProps = dispatch => {
  return {
    onButtonClick: type => {
      dispatch(operateCounter(type))
    },
    onButtonToggleClick: type => {
      dispatch(toggleV(type))
    }
  }
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Counter);
