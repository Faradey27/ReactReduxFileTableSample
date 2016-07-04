import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';

import { getImage } from './../../selectors/files';
import { loadFile } from './../../actions/files';

class Authors extends Component {
  static propTypes = {
    img: PropTypes.instanceOf(Immutable.List),
    loadFile: PropTypes.func.isRequired,
    routeParams: PropTypes.object.isRequired,
  }

  componentWillMount() {
    this.props.loadFile(this.props.routeParams.name);
  }

  render() {
    return (
      <div>
        {'Authors'}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  img: getImage(state, props),
});

export default connect(mapStateToProps, {
  loadFile,
})(Authors);
