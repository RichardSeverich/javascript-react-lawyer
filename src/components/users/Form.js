// React
import React, { useState } from "react";
// Components
import NavigationBar from "./../nav-bar/NavigationBar";
import useInput from "./../hooks/UseInput";
import FormInput from "./../common/FormInput";
import FormDropDown from "./../common/FormDropDown";
import { handleCreate, handleEdit } from "./HandleManager";
import "./Form.css";

const Form = (props) => {

  const [isEdit, setIsEdit] = useState(props.location.state);

  console.log(isEdit)
  let id = isEdit ? isEdit.data.id : "";
  let username = isEdit ? isEdit.data.username : "";
  let password = isEdit ? isEdit.data.password : "";
  let dni = isEdit ? isEdit.data.dni : "";
  let name = isEdit ? isEdit.data.name : "";
  let fatherLastName = isEdit ? isEdit.data.fatherLastName : "";
  let motherLastName = isEdit ? isEdit.data.motherLastName : "";
  let birthDate = isEdit ? isEdit.data.birthDate : "";
  let telephone = isEdit ? isEdit.data.telephone : "";
  let address = isEdit ? isEdit.data.address : "";
  let email = isEdit ? isEdit.data.email : "";
  let type = isEdit ? isEdit.data.type : "";

  const { value: valueUsername, bind: bindUsername, reset: resetUsername } = useInput(username);
  const { value: valuePassword, bind: bindPassword, reset: resetPassword } = useInput(password);
  const { value: valueDni, bind: bindDni, reset: resetDni } = useInput(dni);
  const { value: valueName, bind: bindName, reset: resetName } = useInput(name);
  const { value: valueFatherLastName, bind: bindFatherLastName, reset: resetFatherLastName } 
    = useInput(fatherLastName);
  const { value: valueMotherLastName, bind: bindMotherLastName, reset: resetMotherLastName } 
    = useInput(motherLastName);
  const { value: valueBirthDate, bind: bindBirthDate, reset: resetBirthDate } = useInput(birthDate);
  const { value: valueTelephone, bind: bindTelephone, reset: resetTelephone } = useInput(telephone);
  const { value: valueAddress, bind: bindAddress, reset: resetAddress } = useInput(address);
  const { value: valueEmail, bind: bindEmail, reset: resetEmail } = useInput(email);
  const { value: valueType, bind: bindType, reset: resetType } = useInput(type);
  const optionsType = [
    { value: "admin", content: "Administrador" },
    { value: "lawyer", content: "Abogado" }
  ]
  const handleAdd = () => {
    let body = {
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
    }
    if(isEdit) {
      setIsEdit(undefined);
      handleEdit(body, id)
    } else {
      handleCreate(body);
    }
    resetUsername();
    resetPassword();
    resetDni();
    resetName();
    resetFatherLastName();
    resetMotherLastName();
    resetBirthDate();
    resetTelephone();
    resetAddress();
    resetEmail();
    resetType();
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
                  onClick={handleAdd}
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
