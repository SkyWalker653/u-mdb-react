import React from 'react';
import PropTypes from 'prop-types';
import DataTableInput from './DataTableInput';

const DataTableSearch = props => {
  const { handleSearchChange, search, searching, label, barReverse } = props;
  const style = {
    display: 'inline-block'
  }

  return (
    <div style={style} className="ml-2">
      {searching && (
        <DataTableInput
          value={search}
          onChange={handleSearchChange}
          label={label}
          barReverse={barReverse}
        />
      )}
    </div>
  );
};

DataTableSearch.propTypes = {
  barReverse: PropTypes.bool,
  handleSearchChange: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  searching: PropTypes.bool.isRequired,
  label: PropTypes.string
};

export default DataTableSearch;
export { DataTableSearch as MDBDataTableSearch };
