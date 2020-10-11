// React
import { useHistory } from "react-router";
import React, { useState, useEffect } from 'react';
// Others
import BootstrapTable from 'react-bootstrap-table-next';
import NavigationBar from "./../nav-bar/NavigationBar";
import mockData from "./../../mock-data/mock-data-manager";
import getTableColums from  "./TableColumns";
import filterFactory from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { CSVExport, Search } from 'react-bootstrap-table2-toolkit';

import "./Table.css";

const Table = () => {

  const { REACT_APP_MOCK_DATA } = process.env;
  const [arrayUsers, setArrayUsers] = useState();
  const history = useHistory();

  useEffect(() => {
    if(REACT_APP_MOCK_DATA=="TRUE") {
      console.log(mockData.arrayUsers);
      setArrayUsers(mockData.arrayUsers);
    } else {
      // here should be the API CALL
    }
  });

  const handleDelete = (id) => {
    console.log(id);
    alert("deleted successfully");
  }

  const handleEdit = (id) => {
    console.log(id);
    alert("edit successfully");
  }

  if(arrayUsers===undefined){
    return (<div>Cargando...</div>);
  }

  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="card card-users">
        <div className="card-header">
          <h3 align="center">Usuarios</h3>
        </div>
        <div className="card-body">
          <BootstrapTable
            classes='table'
            keyField='id'
            data={arrayUsers}
            columns={getTableColums(handleEdit, handleDelete)}
            filter={ filterFactory() }
            pagination={ paginationFactory() }
            hover
          />
        </div>
      </div>
    </div>
  );
}

export default Table;
