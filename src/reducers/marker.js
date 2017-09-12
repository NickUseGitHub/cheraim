function addMarker ({markers}) {
  return markers;
}
function editMarker () {}
function deleteMarker () {}
function mapMarkers () {}

export function addMarkersCreator (markers) {
  return { type: actionTypes.ADD_MARKER.key , markers }
}

export const actionTypes = {
  ADD_MARKER: { func: addMarker, key: 'ADD_MARKER' },
  EDIT_MARKER: { func: editMarker, key: 'EDIT_MARKER' },
  DELETE_MARKER: { func: deleteMarker, key: 'DELETE_MARKER' }
};

export default function (markers = {}, action) {
  const { type } = action;

  return actionTypes[type] !== undefined ? actionTypes[type]['func'](action) : {}
}
