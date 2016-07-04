import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import radium from 'radium';
import pureRender from 'pure-render-decorator';

import { getFiles } from './../../selectors/files';

const styles = {
  base: {},
};

@radium
@pureRender
class Table extends Component {
  static propTypes = {
    files: PropTypes.instanceOf(Immutable.List),
    isFetching: PropTypes.bool,
  }

  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  componentWillMount() {}

  render() {
    return (
      <div style={[styles.base]}>
        {'Table page'}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  files: getFiles(state),
  isFetching: state.getIn(['fileView', 'isFetching']),
});

export default connect(mapStateToProps)(Table);
