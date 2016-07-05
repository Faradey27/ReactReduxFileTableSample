import { Component, PropTypes } from 'react';
import radium from 'radium';
import TextField from 'material-ui/TextField';

const styles = {
  base: {
    maxWidth: 150,
  },
};

@radium
class FilesFilter extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    push: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  shouldComponentUpdate() {
    return false;
  }

  handleChange(event, text) {
    const { location } = this.props;
    const { query } = location;
    const nextQuery = Object.assign({}, query, { contains: text });

    if (text) {
      this.props.push({ ...location, query: nextQuery });
    } else if (query.contains) {
      delete query.contains;
      this.props.push({ ...location, query: { ...query } });
    }
  }

  render() {
    return (
      <TextField
        hintText="Enter file name"
        style={styles.base}
        value={this.props.location.query.contains}
        onChange={this.handleChange}
      />
    );
  }
}

export default FilesFilter;
