// import { arrayOf } from 'normalizr';

// import schemaUtils from './../utils/schemaUtils';
// import fileSchema from './../schemas/file';

export const LOAD_FILE_LIST = 'LOAD_FILE_LIST';
export const loadFiles = () => ({ type: LOAD_FILE_LIST });

export const LOAD_FILE = 'LOAD_FILE';
export const loadFile = () => ({ type: LOAD_FILE });

export const UPLOAD_FILE = 'UPLOAD_FILE';
export const uploadFile = (src) => ({ type: UPLOAD_FILE, src });
