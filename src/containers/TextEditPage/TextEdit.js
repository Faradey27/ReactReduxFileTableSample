import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import radium from 'radium';
import pureRender from 'pure-render-decorator';

import { getFile } from './../../selectors/files';
import { loadFile } from './../../actions/files';

const styles = {
  base: {},
};

@radium
@pureRender
class TextEdit extends Component {
  static propTypes = {
    file: PropTypes.instanceOf(Immutable.Map),
    loadFile: PropTypes.func.isRequired,
    routeParams: PropTypes.object.isRequired,
  }

  componentWillMount() {
    this.props.loadFile(this.props.routeParams.name);
  }

  render() {
    return (
      <div style={[styles.base]}>
        {'Text edit page'}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  file: getFile(state, props),
});

export default connect(mapStateToProps, {
  loadFile,
})(TextEdit);
