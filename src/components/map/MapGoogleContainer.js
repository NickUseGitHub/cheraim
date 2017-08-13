import { compose } from 'recompose';
import { withGoogleMap } from "react-google-maps";

import MapGoogle from './MapGoogle';

export default compose (
  withGoogleMap
)(MapGoogle)