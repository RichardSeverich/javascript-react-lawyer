import React from 'react';
import { textFilter } from 'react-bootstrap-table2-filter';

const getTableColums = (handleEdit, handleDelete) => {

  const columns = [
    {
      dataField: 'id',
      text: 'Id',
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '120px'
      }
    },
    {
      dataField: 'username',
      text: 'Username',
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '160px'
      }
    },
    {
      dataField: 'password',
      text: 'Contrasena',
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '160px'
      }
    },
    {
      dataField: 'dni',
      text: 'Cedula Identidad',
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '160px'
      }
    },
    {
      dataField: 'name',
      text: 'Nombres',
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '160px'
      }
    },
    {
      dataField: 'fatherLastName',
      text: 'Apellido Paterno',
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '160px'
      }
    },
    {
      dataField: 'motherLastName',
      text: 'Apellido Materno',
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '160px'
      }
    }, 
    {
      dataField: 'birthDate',
      text: 'Fecha Nacimiento',
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '160px'
      }
    },
    {
      dataField: 'telephone',
      text: 'Celular',
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '160px'
      }
    },
    {
      dataField: 'address',
      text: 'Direccion',
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '160px'
      }
    },
    {
      dataField: 'email',
      text: 'Correo Electronico',
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '250px'
      }
    },
    {
      dataField: 'type',
      text: 'Tipo',
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '120px'
      }
    },
    {
      dataField: 'creationDate',
      text: 'Fecha de creacion',
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '160px'
      }
    },
    {
      dataField: 'updateDate',
      text: 'Fecha de modificacion',
      sort: true,
      filter: textFilter(),
      headerStyle: {
        width: '160px'
      }
    },
    {
      dataField: 'edit',
      text: 'Editar',
      headerStyle: {
        width: '120px'
      },
      formatter: (cell, row, rowIndex) => (
      <button
        className="btn btn-warning"
        onClick={() => handleEdit(row.id)}
      >
        Editar
      </button>
      ),
    },
    {
      dataField: 'delete',
      text: 'Eliminar',
      headerStyle: {
        width: '120px'
      },
      formatter: (cell, row, rowIndex) => (
        <button
        className="btn btn-danger"
        onClick={() => handleDelete(row.id)}
        >
        Eliminar
        </button>
      ),
    }
  ];
  return columns;
}

export default getTableColums;
