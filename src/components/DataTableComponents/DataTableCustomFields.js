import React from "react";

const DataTableCustomFields = props => {
  const style = {
    display: 'inline-block'
  }

  return (
    <div style={style} className="ml-2">
      <label>{props.children}</label>
    </div>
  );
};

export default DataTableCustomFields;
