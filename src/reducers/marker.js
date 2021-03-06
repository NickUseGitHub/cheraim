function addMarker ({marker, dbRef, prevMarkers}) {
  const newMarkerRef = dbRef.push();
  newMarkerRef.set(marker);

  prevMarkers[newMarkerRef.key] = marker;
  return prevMarkers;
}
function editMarker () {}
function deleteMarker () {}
function mapMarkers ({markers}) {
  return markers || {};
}

export function mapMarkersCreator (markers) {
  return { type: actionTypes.MAP_MARKER.key , markers }
}

export function addMarkersCreator (dbRef, marker) {
  return { type: actionTypes.ADD_MARKER.key, marker, dbRef }
}

export const actionTypes = {
  MAP_MARKER: { func: mapMarkers, key: 'MAP_MARKER' },
  ADD_MARKER: { func: addMarker, key: 'ADD_MARKER' },
  EDIT_MARKER: { func: editMarker, key: 'EDIT_MARKER' },
  DELETE_MARKER: { func: deleteMarker, key: 'DELETE_MARKER' }
};

export default function (prevMarkers = {}, action) {
  const { type } = action;

  return actionTypes[type] !== undefined ? actionTypes[type]['func']({prevMarkers, ...action}) : prevMarkers;
}
