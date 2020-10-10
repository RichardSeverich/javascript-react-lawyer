// React
import { useHistory } from "react-router";
import React, { useState, useEffect } from 'react';
// Others
import NavigationBar from "./../nav-bar/NavigationBar";
import mockData from "./../../mock-data/mock-data-manager";
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
    alert("deleted successfully");
  }

  const handleEdit = (id) => {
    alert("edit successfully");
  }

  if(arrayUsers==undefined){
    return (<div>Cargando...</div>);
  }

  return (
    <div>
      <NavigationBar></NavigationBar>
      <div align="center">
        <div className="card card-users">
          <div className="card-header">
            <h3 align="center">Usuarios</h3>
          </div>
          <div className="card-body">
            <table className="table table-hover table-bordered">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">username</th>
                  <th scope="col">contrasena</th>
                  <th scope="col">Numero Cedula Identidad</th>
                  <th scope="col">Nombres</th>
                  <th scope="col">Apellido Paterno</th>
                  <th scope="col">Apellido Materno</th>
                  <th scope="col">Fecha Nacimiento</th>
                  <th scope="col">Telefono/Celular</th>
                  <th scope="col">Direccion/Domicilio</th>
                  <th scope="col">Correo Electronico</th>
                  <th scope="col">Tipo</th>
                  <th scope="col">Fecha de creacion</th>
                  <th scope="col">Fecha de modificacion</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {
                  arrayUsers.map((user, i) => {
                    return (
                      <tr key={user.id}>
                      <td scope="col">{user.id}</td>
                      <td scope="col">{user.username}</td>
                      <td scope="col">{user.password}</td>
                      <td scope="col">{user.dni}</td>
                      <td scope="col">{user.name}</td>
                      <td scope="col">{user.fatherLastName}</td>
                      <td scope="col">{user.motherLastName}</td>
                      <td scope="col">{user.birthDate}</td>
                      <td scope="col">{user.telephone}</td>
                      <td scope="col">{user.address}</td>
                      <td scope="col">{user.email}</td>
                      <td scope="col">{user.type}</td>
                      <td scope="col">{user.creationDate}</td>
                      <td scope="col">{user.updateDate}</td>
                      <td scope="col">
                        <button 
                          className="btn btn-warning"
                          onClick={() => handleDelete(user.id)}
                        >
                          Editar
                        </button>
                      </td>
                      <td scope="col">
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(user.id)}
                        >
                          Eliminar
                        </button>
                      </td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Table;
