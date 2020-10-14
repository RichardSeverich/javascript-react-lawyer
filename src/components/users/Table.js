// React
import { useHistory } from "react-router";
import React, { useState, useEffect } from "react";
// OTHERS
import NavigationBar from "./../nav-bar/NavigationBar";
import CommonTable from "./../common/CommonTable";
import Loading from "./../common/Loading"
import i18n from "./../../i18n/i18n";
import getTableModel from "./TableModel";
import { handleGet, handleEdit, handleDelete } from "./HandleManager";
import "./Table.css";

const Table = () => {

  // Declare constant
  const [arrayData, setArrayData] = useState();
  const history = useHistory();

  // Hooks
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      handleGet(setArrayData);
    }
    return () => { isMounted = false };
  });

  const navigateForm = () => {
    history.push("/user-form");
  }

  if (arrayData === undefined) {
    return <Loading></Loading>;
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
              columns={getTableModel(handleEdit, handleDelete)}>
            </CommonTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
