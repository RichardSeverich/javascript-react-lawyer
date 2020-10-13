// React
import { useHistory } from "react-router";
import React, { useState, useEffect } from "react";
// Others
import NavigationBar from "./../nav-bar/NavigationBar";
import CommonTable from "./../common/CommonTable";
import Loading from "./../common/Loading"
import i18n from "./../../i18n/i18n";
import getTableModel from "./TableModel";
import handleEditRequest from "./HandleEditRequest";
import handleDeleteRequest from "./HandleDeleteRequest";
import handleEditMock from "./HandleEditMock";
import handleDeleteMock from "./HandleDeleteMock";
import mockData from "./../../mock-data/mock-data-manager";
import requestManager from "./../../api/RequestManager";

import "./Table.css";

const Table = () => {

  // Declare constant
  const { REACT_APP_MOCK_DATA } = process.env;
  const [arrayData, setArrayData] = useState();
  const history = useHistory();
  let handleEdit = handleEditRequest;
  let handleDelete = handleDeleteRequest;

  // Hooks
  useEffect(() => {
    let isMounted = true; 
    if (REACT_APP_MOCK_DATA === "TRUE") {
      if (isMounted) {
        setArrayData(mockData.arrayUsers);
        handleEdit = handleEditMock;
        handleDelete = handleDeleteMock;
      }
    } else {
      requestManager.get("users", (response) => {
        if(response.status==200){
          if (isMounted) {
            setArrayData(response.data.data);
          }
        }
      });
    }
    return () => { isMounted = false };
  });

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
