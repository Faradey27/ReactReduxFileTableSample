import { createSelector } from 'reselect';

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

const getFilesData = (state) => state.getIn(['entities', 'file']);

export const getFiles = createSelector(
  [getFilesData],
  (files) => files.toList()
);
