import { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import routes from '../routes';
import DevTools from './DevTools';

const Root = ({ store, history }) => (
  <Provider store={store}>
    <div>
      <Router
        history={history}
        routes={routes}
      />
      <DevTools />
    </div>
  </Provider>
);

Root.propTypes = {
  history: PropTypes.object,
  store: PropTypes.object.isRequired,
};

export default Root;
