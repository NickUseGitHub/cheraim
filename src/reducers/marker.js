function addMarker () {}
function editMarker () {}
function deleteMarker () {}
function mapMarkers () {}

export const actionTypes = {
  ADD_MARKER: addMarker,
  EDIT_MARKER: editMarker,
  DELETE_MARKER: deleteMarker,
  GET_MARKERS: mapMarkers
};

export default function (markers = {}, action) {
  const { type } = action;

  return actionTypes[type] !== undefined ? actionTypes[type](action) : {}
}
