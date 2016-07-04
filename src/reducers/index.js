import { combineReducers } from 'redux-immutablejs';
import Immutable from 'immutable';

import routing from './routing';
import filesView from './filesView';

const entities = (state = Immutable.fromJS({ files: {} }), action) => {
  if (action.payload && action.payload.entities) {
    return state.mergeDeep(Immutable.fromJS(action.payload.entities));
  }

  return state;
};

export default combineReducers({
  entities,
  filesView,
  routing,
});
