import { Schema } from 'normalizr';

const file = new Schema('file', {
  idAttribute: 'name',
});

export default file;
