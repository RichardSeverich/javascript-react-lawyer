import React from 'react';
import { textFilter, dateFilter, selectFilter } from 'react-bootstrap-table2-filter';
import i18n from "./../../i18n/i18n";

const getTableModel = (navigateForm, handleEdit, handleDelete) => {

  const columns = [
    {
      dataField: 'id',
      text: i18n.personTable.headerId,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '120px'
      }
    },
    {
      dataField: 'dni',
      text: i18n.personTable.headerDni,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '160px'
      }
    },
    {
      dataField: 'name',
      text: i18n.personTable.headerName,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '160px'
      }
    },
    {
      dataField: 'fatherLastName',
      text: i18n.personTable.headerFatherLastName,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '160px'
      }
    },
    {
      dataField: 'motherLastName',
      text: i18n.personTable.headerMotherLastName,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '160px'
      }
    }, 
    {
      dataField: 'birthDate',
      text: i18n.personTable.headerBirthdate,
      sort: true,
      filter: dateFilter(),
      headerStyle: {
        width: '220px'
      }
    },
    {
      dataField: 'telephone',
      text: i18n.personTable.headerTelephone,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '180px'
      }
    },
    {
      dataField: 'address',
      text: i18n.personTable.headerAddress,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '250px'
      }
    },
    {
      dataField: 'email',
      text: i18n.personTable.headerEmail,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '250px'
      }
    },
    {
      dataField: 'creationDate',
      text: i18n.personTable.headerCreationDate,
      sort: true,
      filter: dateFilter(),
      headerStyle: {
        width: '220px'
      }
    },
    {
      dataField: 'updateDate',
      text: i18n.personTable.headerModificationDate,
      sort: true,
      filter: dateFilter(),
      headerStyle: {
        width: '220px'
      }
    },
    {
      dataField: 'createdBy',
      text: i18n.personTable.headerCreatedBy,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '160px'
      }
    },
    {
      dataField: 'updatedBy',
      text: i18n.personTable.headerUpdatedBy,
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '160px'
      }
    },
    {
      dataField: 'edit',
      text: i18n.personTable.edit,
      headerStyle: {
        width: '120px'
      },
      formatter: (cell, row, rowIndex) => (
      <button
        className="btn btn-warning"
        onClick={() => handleEdit(navigateForm, row)}
      >
        {i18n.personTable.edit}
      </button>
      ),
    },
    {
      dataField: 'delete',
      text: i18n.personTable.delete,
      headerStyle: {
        width: '120px'
      },
      formatter: (cell, row, rowIndex) => (
        <button
        className="btn btn-danger"
        onClick={() => handleDelete("persons/", row.id)}
        >
          {i18n.personTable.delete}
        </button>
      ),
    }
  ];
  return columns;
}

export default getTableModel;
