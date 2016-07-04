import { arrayOf, normalize } from 'normalizr';

import fileSchema from './../schemas/file';

import mockedFiles from './../../mocks/defaultFiles.json';

export const LOAD_FILE_LIST = 'LOAD_FILE_LIST';
export const loadFiles = () => ({ type: LOAD_FILE_LIST, payload: normalize(mockedFiles, arrayOf(fileSchema)) });

export const LOAD_FILE = 'LOAD_FILE';
export const loadFile = () => ({ type: LOAD_FILE });

export const UPLOAD_FILE = 'UPLOAD_FILE';
export const uploadFile = (src) => ({ type: UPLOAD_FILE, src });
