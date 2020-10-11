// React
import { useHistory } from "react-router";
import React, { useState, useEffect } from 'react';
// Others
import NavigationBar from "./../nav-bar/NavigationBar";
import mockData from "./../../mock-data/mock-data-manager";
import getTableColums from  "./TableColumns";
import CommonTable from "./../common/CommonTable"
import "./Table.css";

const Table = () => {

  const { REACT_APP_MOCK_DATA } = process.env;
  const [arrayData, setArrayData] = useState();
  const history = useHistory();
 
  useEffect(() => {
    if(REACT_APP_MOCK_DATA=="TRUE") {
      console.log(mockData.arrayUsers);
      setArrayData(mockData.arrayUsers);
    } else {
      // here should be the API CALL
    }
  });

  const handleEdit = (id) => {
    console.log(id);
    alert("edit successfully");
  }

  const handleDelete = (id) => {
    console.log(id);
    alert("deleted successfully");
  }

  if(arrayData===undefined){
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
        <CommonTable
          arrayData={arrayData}
          columns={getTableColums(handleEdit, handleDelete)}
        ></CommonTable>
        </div>
      </div>
    </div>
  );
}

export default Table;
