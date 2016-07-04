import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import radium from 'radium';
import pureRender from 'pure-render-decorator';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import { getFiles } from './../../selectors/files';

const styles = {
  base: {
    display: 'flex',
    flewWrap: 'nowrap',
    border: '1px solid #000',
    margin: 15,
    minWidth: 800,
  },
  fileBase: {
    width: '70%',
  },
  actionBase: {
    width: '30%',
  },
  cell: {
    borderRight: '1px solid #000',
  },
  actionCell: {
    overflow: 'visible',
    whiteSpace: 'wrap',
    borderRight: 'none',
  },
  row: {
    borderBottom: 'none',
  },
};

const ACTION_TEXT = 'Select file at the left side by clicking on it';
const HEADER_COLUMNS = ['File Name', 'File Type', 'Size (Kb)'];
const FILE_TYPES = {
  txt: 'Text',
  png: 'PNG Image',
  web: 'Web page',
};

@radium
@pureRender
class TablePage extends Component {
  static propTypes = {
    files: PropTypes.instanceOf(Immutable.List),
    isFetching: PropTypes.bool,
  }

  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  renderTableHeader() {
    return HEADER_COLUMNS.map((name) => (
      <TableHeaderColumn
        key={name}
        style={styles.cell}
      >
        {name}
      </TableHeaderColumn>
    ));
  }

  renderTableRows() {
    return this.props.files.map((file) => (
      <TableRow
        key={file.get('name')}
        style={styles.row}
      >
        <TableRowColumn style={styles.cell}>{file.get('name')}</TableRowColumn>
        <TableRowColumn style={styles.cell}>{FILE_TYPES[file.get('type')]}</TableRowColumn>
        <TableRowColumn style={styles.cell}>{file.get('size')}</TableRowColumn>
      </TableRow>
    ));
  }

  render() {
    const actionStyle = Object.assign({}, styles.cell, styles.actionCell);

    return (
      <div style={[styles.base]}>
        <Table wrapperStyle={styles.fileBase}>
          <TableHeader
            adjustForCheckbox={false}
            displaySelectAll={false}
            style={styles.row}
          >
            <TableRow
              selectable={false}
              style={styles.row}
            >
              {this.renderTableHeader()}
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.renderTableRows()}
            <TableRow
              selectable={false}
              style={styles.row}
            >
              <TableRowColumn style={styles.cell}>
                <TextField
                  hintText="Enter file name"
                  style={{ maxWidth: '150' }}
                />
              </TableRowColumn>
              <TableRowColumn style={styles.cell} />
              <TableRowColumn style={styles.cell} />
            </TableRow>
          </TableBody>
        </Table>
        <Table wrapperStyle={styles.actionBase}>
          <TableHeader
            adjustForCheckbox={false}
            displaySelectAll={false}
            style={styles.row}
          >
            <TableRow style={styles.row}>
              <TableHeaderColumn>
                {'Action'}
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            <TableRow
              selectable={false}
              style={styles.row}
            >
              <TableRowColumn style={actionStyle}>{ACTION_TEXT}</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  files: getFiles(state),
  isFetching: state.getIn(['fileView', 'isFetching']),
});

export default connect(mapStateToProps)(TablePage);
