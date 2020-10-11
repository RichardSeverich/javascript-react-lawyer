import React from 'react';

const ExportButton = (props) => {
  const handleClick = () => {
    props.onExport();
  };
  return (
    <div align="left">
    <button
      className="btn btn-success" 
      onClick={ handleClick }
    >
      Exportar a CSV
    </button>
    </div>
  );
};

export default ExportButton;
