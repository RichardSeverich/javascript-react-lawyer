// React
import { useHistory } from "react-router";
import React, { useState, useEffect } from "react";
// Others
import CommonTable from "./../common/CommonTable";
import NavigationBar from "./../nav-bar/NavigationBar";
import i18n from "./../../i18n/i18n";
import getTableColums from "./TableColumns";
import mockData from "./../../mock-data/mock-data-manager";
import requestManager from "./../../api/requestManager";

import "./Table.css";

const Table = () => {

  // Declare constant
  const { REACT_APP_MOCK_DATA } = process.env;
  const [arrayData, setArrayData] = useState();
  const history = useHistory();

  // Hooks
  useEffect(() => {
    if (REACT_APP_MOCK_DATA == "TRUE") {
      console.log(mockData.arrayUsers);
      setArrayData(mockData.arrayUsers);
    } else {
      requestManager.get("users", (response) => {
        if(response.data){
          setArrayData(response.data.data);  
        }
      });
    }
  });

  // Handles
  const handleEdit = (id) => {
    console.log(id);
    alert("edit successfully");
  };

  const handleDelete = (id) => {
    console.log(id);
    const message = "Esta segudo que desa realizar esta accion?"
    let result = window.confirm(message);
    if(result){
      alert("Eliminado correctamente");
    }
  };

  if (arrayData === undefined) {
    return <div>{i18n.userTable.tableLoadingSection}</div>;
  }

  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="container col-md-12">
        <div className="card card-users">
          <div className="card-header">
            <h3 align="center">{i18n.userTable.tableTitle}</h3>
          </div>
          <div className="card-body card-body-users">
            <CommonTable 
              arrayData={arrayData} 
              columns={getTableColums(handleEdit, handleDelete)}>
            </CommonTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
