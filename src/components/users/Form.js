// React
import React, { useState } from "react";
// Components
import NavigationBar from "./../nav-bar/NavigationBar";
import mockData from "./../../mock-data/mock-data-manager";
import { useInput } from './../hooks/useInput';
import "./Form.css";

const Form = () => {

  const { REACT_APP_MOCK_DATA } = process.env;
  const { value:valueUsername, bind:bindUsername, reset:resetUsername } = useInput('');
  const { value:valuePassword, bind:bindPassword, reset:resetPassword } = useInput('');
  const { value:valueDni, bind:bindDni, reset:resetDni } = useInput('');
  const { value:valueName, bind:bindName, reset:resetName } = useInput('');
  const { value:valueFatherLastName, bind:bindFatherLastName, reset:resetFatherLastName } = useInput('');
  const { value:valueMotherLastName, bind:bindMotherLastName, reset:resetMotherLastName } = useInput('');
  const { value:valueBirthDate, bind:bindBirthDate, reset:resetBirthDate } = useInput('');
  const { value:valueTelephone, bind:bindTelephone, reset:resetTelephone } = useInput('');
  const { value:valueAddress, bind:bindAddress, reset:resetAddress } = useInput('');
  const { value:valueEmail, bind:bindEmail, reset:resetEmail } = useInput('');
  const { value:valueType, bind:bindType, reset:resetType } = useInput('');
  const [arrayUsers, setArrayUsers] = useState();

  const handleCreate = () => {
 
  }

  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="container col-md-4">
        <div className="card">
          <div className="card-header">
            <h3 align="center">Usuarios</h3>
          </div>
          <div className="card-body">
            <form className="">
              <div className="form-group row">
                <label className="col-sm-3 control-label" >Username</label>
                <div className="col-sm-9" >
                  <input
                  className="form-control"
                  minLength="3"
                  maxLength="10"
                  {...bindUsername}
                  ></input>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 control-label">Contrasena</label>
                <div className="col-sm-9" >
                  <input
                    className="form-control"
                    type="password"
                    minLength="3"
                    maxLength="10"
                    {...bindPassword}
                  ></input>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 control-label">Cedula Identidad</label>
                <div className="col-sm-9" >
                  <input
                    type="text"
                    className="form-control"
                    maxLength="7"
                    {...bindDni}
                  ></input>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 control-label">Nombres</label>
                <div className="col-sm-9" >
                  <input
                    type="text"
                    className="form-control"
                    minLength="3"
                    maxLength="24"
                  {...bindName}
                  ></input>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 control-label">Apellido de padre</label>
                <div className="col-sm-9" >
                  <input
                    type="text"
                    className="form-control"
                    minLength="3"
                    maxLength="24"
                    {...bindFatherLastName}
                  ></input>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 control-label">Apellido de Madre</label>
                <div className="col-sm-9" >
                  <input
                    type="text"
                    className="form-control"
                    minLength="3"
                    maxLength="24"
                    {...bindMotherLastName}
                  ></input>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 control-label">Fecha de nacimiento</label>
                <div className="col-sm-9" >
                  <input
                    type="date"
                    className="form-control"
                    {...bindBirthDate}
                  ></input>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 control-label">Celular</label>
                <div className="col-sm-9" >
                  <input
                    type="text"
                    className="form-control"
                    {...bindTelephone}
                  ></input>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 control-label">Direccion</label>
                <div className="col-sm-9" >
                  <input
                    type="text"
                    className="form-control"
                    {...bindAddress}
                  ></input>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 control-label">Email</label>
                <div className="col-sm-9" >
                  <input
                    type="text"
                    className="form-control"
                    {...bindEmail}
                  ></input>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 control-label">Tipo</label>
                <div className="col-sm-9" >
                  <select
                    className="custom-select custom-select-sm"
                    {...bindType}
                  >
                    <option value="admin">Administrador</option>
                    <option value="lawyer">Abogado</option>
                  </select>
                </div>
              </div>
              <div className="text-center">
                <button
                  onClick={handleCreate}
                  type="button"
                  className="btn btn-success"
                >
                  Registrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
