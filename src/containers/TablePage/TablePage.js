import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import radium from 'radium';
import pureRender from 'pure-render-decorator';
import { push } from 'react-router-redux';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import FontIcon from 'material-ui/FontIcon';
import { getFiles } from './../../selectors/files';
import { setActiveFileName } from './../../actions/files';
import FilesFilter from './components/FilesFilter';

const styles = {
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    border: '1px solid #000',
    margin: 15,
    minWidth: 800,
  },
  tables: {
    display: 'flex',
    flexWrap: 'nowrap',
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
  search: {
    display: 'flex',
    alignItems: 'center',
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
    activeFileName: PropTypes.string,
    files: PropTypes.instanceOf(Immutable.List),
    isFetching: PropTypes.bool,
    location: PropTypes.object,
    push: PropTypes.func,
    setActiveFileName: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.handleRowSelect = this.handleRowSelect.bind(this);
  }

  handleRowSelect(selectedIndexes) {
    this.props.setActiveFileName(this.props.files.getIn([selectedIndexes[0], 'name']));
  }

  renderActionBlock() {
    const actionStyle = Object.assign({}, styles.cell, styles.actionCell);

    if (!this.props.activeFileName) {
      return <TableRowColumn style={actionStyle}>{ACTION_TEXT}</TableRowColumn>;
    }

    const type = this.props.files.find((file) => file.get('name') === this.props.activeFileName).get('type');

    console.log(type);

    return null;
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
        selected={file.get('name') === this.props.activeFileName}
        style={styles.row}
      >
        <TableRowColumn style={styles.cell}>{file.get('name')}</TableRowColumn>
        <TableRowColumn style={styles.cell}>{FILE_TYPES[file.get('type')]}</TableRowColumn>
        <TableRowColumn style={styles.cell}>{file.get('size')}</TableRowColumn>
      </TableRow>
    ));
  }

  render() {
    return (
      <div style={[styles.base]}>
        <div style={[styles.tables]}>
          <Table
            wrapperStyle={styles.fileBase}
            onRowSelection={this.handleRowSelect}
          >
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
                {this.renderActionBlock()}
              </TableRow>
            </TableBody>
          </Table>
        </div>
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
              <TableRowColumn style={Object.assign({}, styles.cell, styles.search)}>
                <FilesFilter
                  location={this.props.location}
                  push={this.props.push}
                />
                <FontIcon className="material-icons">{'search'}</FontIcon>
              </TableRowColumn>
              <TableRowColumn style={styles.cell} />
              <TableRowColumn style={styles.cell} />
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} />
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  activeFileName: state.getIn(['filesView', 'activeFileName']),
  files: getFiles(state, ownProps),
  isFetching: state.getIn(['fileView', 'isFetching']),
});

export default connect(mapStateToProps, { push, setActiveFileName })(TablePage);
