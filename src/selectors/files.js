import { createSelector } from 'reselect';
import { NOT_FOUND } from './../constants/Constants';

const getImageData = (state) => state.getIn(['entities', 'file']);

export const getImage = createSelector(
  [getImageData],
  (img) => img
);

const getFileData = (state) => state.getIn(['entities', 'file']);

export const getFile = createSelector(
  [getFileData],
  (file) => file
);

const getFilesData = (state, props) => state.getIn(['entities', 'file']).
  filter(
    (file) => !props.location.query.contains || file.get('name').indexOf(props.location.query.contains) !== NOT_FOUND
  );

export const getFiles = createSelector(
  [getFilesData],
  (files) => files.toList()
);
