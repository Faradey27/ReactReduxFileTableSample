import { createReducer } from 'redux-immutablejs';
import Immutable from 'immutable';

import * as ActionTypes from './../actions/files';

const initialState = Immutable.fromJS({
  isFetching: false,
  error: null,
  list: {},
});

export default createReducer(initialState, {
  [ActionTypes.LOAD_FILE_LIST]: (state, action) => state.merge({
    isFetching: false,
    error: null,
    list: action.payload.entities.result,
  }),
  [ActionTypes.LOAD_FILE]: (state) => state.merge({
    isFetching: false,
    error: null,
  }),
});
