import { Route, IndexRedirect } from 'react-router';

import App from './containers/App';
import TablePage from './containers/TablePage';
import TextEditPage from './containers/TextEditPage';
import UploadPage from './containers/UploadPage';
import ImageViewPage from './containers/ImageViewPage';

export default (
  <Route
    component={App}
    path="/"
  >
    <IndexRedirect to="/files" />
    <Route
      component={TablePage}
      path="/files"
    />
    <Route
      component={TextEditPage}
      path="/file/txt/:name"
    />
    <Route
      component={UploadPage}
      path="/file/upload"
    />
    <Route
      component={ImageViewPage}
      path="/file/img/:name"
    />
  </Route>
);
