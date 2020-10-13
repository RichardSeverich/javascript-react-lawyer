// React
import React, { useState } from "react";
// Components
import NavigationBar from "./../nav-bar/NavigationBar";
import useInput from "./../hooks/UseInput";
import FormInput from "./../common/FormInput";
import FormDropDown from "./../common/FormDropDown";
import handleAddRequest from "./HandleAddRequest";
import "./Form.css";

const Form = () => {
  // Env Variables
  const { REACT_APP_MOCK_DATA } = process.env;
  const { REACT_APP_BACKEND_HOST } = process.env;
  const { REACT_APP_BACKEND_PORT } = process.env;
  // Input values
  const { value: valueUsername, bind: bindUsername, reset: resetUsername } = useInput("");
  const { value: valuePassword, bind: bindPassword, reset: resetPassword } = useInput("");
  const { value: valueDni, bind: bindDni, reset: resetDni } = useInput("");
  const { value: valueName, bind: bindName, reset: resetName } = useInput("");
  const { value: valueFatherLastName, bind: bindFatherLastName, reset: resetFatherLastName } = useInput("");
  const { value: valueMotherLastName, bind: bindMotherLastName, reset: resetMotherLastName } = useInput("");
  const { value: valueBirthDate, bind: bindBirthDate, reset: resetBirthDate } = useInput("");
  const { value: valueTelephone, bind: bindTelephone, reset: resetTelephone } = useInput("");
  const { value: valueAddress, bind: bindAddress, reset: resetAddress } = useInput("");
  const { value: valueEmail, bind: bindEmail, reset: resetEmail } = useInput("");
  const { value: valueType, bind: bindType, reset: resetType } = useInput("");
  const optionsType = [
    { value: "admin", content: "Administrador" },
    { value: "lawyer", content: "Abogado" }
  ]
  // Create logic
  const handleCreate = () => {
    if (REACT_APP_MOCK_DATA == "TRUE") {
      alert("create successfully");
    } else {
      handleAddRequest({
        username: valueUsername,
        password: valuePassword,
        dni: valueDni,
        name: valueName,
        fatherLastName: valueFatherLastName,
        motherLastName: valueMotherLastName,
        birthDate: valueBirthDate,
        telephone: valueTelephone,
        address: valueAddress,
        email: valueEmail,
        type: valueType,
      })
    }
  };

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
              <FormInput 
                labelContent="Username" 
                minLength="3" maxLength="10" 
                bind={bindUsername}
              ></FormInput>
              <FormInput 
                labelContent="Contrasena" 
                minLength="3" 
                maxLength="10" 
                bind={bindPassword}
              ></FormInput>
              <FormInput 
                labelContent="Cedula Identidad" 
                minLength="7" 
                maxLength="7" 
                bind={bindDni}
              ></FormInput>
              <FormInput 
                labelContent="Nombres" 
                minLength="3" 
                maxLength="24" 
                bind={bindName}
              ></FormInput>
              <FormInput
                labelContent="Apellido Paterno"
                minLength="3"
                maxLength="24"
                bind={bindFatherLastName}
              ></FormInput>
              <FormInput
                labelContent="Apellido Materno"
                minLength="3"
                maxLength="24"
                bind={bindMotherLastName}
              ></FormInput>
              <FormInput
                labelContent="Fecha de Nacimiento"
                type="date"
                bind={bindBirthDate}
              ></FormInput>
              <FormInput
                labelContent="Celular"
                minLength="3"
                maxLength="24"
                type="number"
                bind={bindTelephone}
              ></FormInput>
              <FormInput 
                labelContent="Direccion" 
                minLength="3" 
                maxLength="30" 
                bind={bindAddress}
              ></FormInput>
              <FormInput 
                labelContent="Email" 
                minLength="3" 
                maxLength="30" 
                bind={bindEmail}
              ></FormInput>
              <FormDropDown
               labelContent="Tipo" 
               options={optionsType}
               bind={bindType}
              ></FormDropDown>
              <div className="text-center">
                <button
                  className="btn btn-success"
                  onClick={handleCreate} 
                  type="button" >
                  Registrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
