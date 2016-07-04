import { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { loadFiles } from './../actions/files';

class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    loadFiles: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.loadFiles();
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect(null, {
  loadFiles,
})(App);
