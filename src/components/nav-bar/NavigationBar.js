import React from "react";
import { useHistory } from "react-router";

import "./NavigationBar.css";
import logo from "./logo.svg";

const NavigationBar = () => {

  const history = useHistory();

  const navigateUsersTable = () => {
    history.push("/users-table");
  }

  const navigateUsersForm = () => {
    history.push("/users-form");
  }

  const navigateLogin = () => {
    history.push("/login");
  }

  return (
    <div>
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <a className="navbar-brand" href="/nav-bar">
        <img src={logo} className="App-logo-bar" alt="logo" />
      </a>
      <ul className="navbar-nav">
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-dark dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Adm. Usuarios
          </button>
          <div className="dropdown-menu dropdown-menu-right">
            <button
              onClick={navigateUsersTable}
              className="dropdown-item"
              type="button"
            >
              Mostrar
            </button>
            <button
              onClick={navigateUsersForm}
              className="dropdown-item"
              type="button"
            >
              Crear
            </button>
          </div>
        </div>

        <div className="btn-group">
          <button
            type="button"
            className="btn btn-dark dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Adm. Personas
          </button>
          <div className="dropdown-menu dropdown-menu-right">
            <button
              onClick={navigateUsersTable}
              className="dropdown-item"
              type="button"
            >
              Mostrar
            </button>
            <button
              onClick={navigateUsersTable}
              className="dropdown-item"
              type="button"
            >
              Crear
            </button>
          </div>
        </div>

        <div className="btn-group">
          <button
            type="button"
            className="btn btn-dark dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Adm. Procesos
          </button>
          <div className="dropdown-menu dropdown-menu-right">
            <button
              onClick={navigateUsersTable}
              className="dropdown-item"
              type="button"
            >
              Mostrar
            </button>
            <button
              onClick={navigateUsersTable}
              className="dropdown-item"
              type="button"
            >
              Crear
            </button>
          </div>
        </div>

        <div className="btn-group">
          <button
            type="button"
            className="btn btn-dark dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Adm. Repores
          </button>
          <div className="dropdown-menu dropdown-menu-right">
            <button className="dropdown-item" type="button">
              Reporte Usuarios
            </button>
            <button className="dropdown-item" type="button">
              Reporte Personas
            </button>
            <button className="dropdown-item" type="button">
              Reporte Procesos
            </button>
          </div>
        </div>
      </ul>

      <ul className="navbar-nav ml-auto nav-flex-icons">
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-dark dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Opciones
          </button>
          <div className="dropdown-menu dropdown-menu-right">
            <button 
              className="dropdown-item" 
              type="button"
            >
              Parametros del sistema
            </button>
            <button 
              onClick={navigateLogin} 
              className="dropdown-item" 
              type="button"
            >
              Salir
            </button>
          </div>
        </div>
      </ul>
    </nav>
  </div>
  );
};

export default NavigationBar;
