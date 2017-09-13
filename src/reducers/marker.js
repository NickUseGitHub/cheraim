function addMarker ({marker, db, markers}) {
  console.log('markers', markers)
  console.log('marker', marker)
  console.log('db', db)
}
function editMarker () {}
function deleteMarker () {}
function mapMarkers ({markers}) {return markers;}

export function mapMarkersCreator (markers) {
  return { type: actionTypes.MAP_MARKER.key , markers }
}

export function addMarkersCreator (marker, db) {
  return { type: actionTypes.ADD_MARKER.key, marker, db }
}

export const actionTypes = {
  MAP_MARKER: { func: mapMarkers, key: 'MAP_MARKER' },
  ADD_MARKER: { func: addMarker, key: 'ADD_MARKER' },
  EDIT_MARKER: { func: editMarker, key: 'EDIT_MARKER' },
  DELETE_MARKER: { func: deleteMarker, key: 'DELETE_MARKER' }
};

export default function (markers = {}, action) {
  const { type } = action;

  return actionTypes[type] !== undefined ? actionTypes[type]['func']({...action, markers}) : {}
}
