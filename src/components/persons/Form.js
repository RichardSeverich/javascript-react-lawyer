// React
import React, { useState } from "react";
// Components
import NavigationBar from "./../nav-bar/NavigationBar";
import useInput from "./../hooks/UseInput";
import FormInput from "./../common/FormInput";
import FormDropDown from "./../common/FormDropDown";
import i18n from "./../../i18n/i18n";
import handleValidations from "./HandleValidations";
import { handleCreate, handleEdit } from "./../handle/HandleManager";

const Form = (props) => {

  const colorFormReset = {
    dni: "",
    name: "",
    fatherLastName: "",
    motherLastName: "",
    birthDate: "",
    telephone: "",
    address: "",
    email: "",
  }
  
  const [isEdit, setIsEdit] = useState(props.location.state);
  const [colorFormText, setColorFormText] = useState(colorFormReset);

  console.log("isEdit " + isEdit);
  let id = isEdit ? isEdit.data.id : "";
  let dni = isEdit ? isEdit.data.dni : "";
  let name = isEdit ? isEdit.data.name : "";
  let fatherLastName = isEdit ? isEdit.data.fatherLastName : "";
  let motherLastName = isEdit ? isEdit.data.motherLastName : "";
  let birthDate = isEdit ? isEdit.data.birthDate : "";
  let telephone = isEdit ? isEdit.data.telephone : "";
  let address = isEdit ? isEdit.data.address : "";
  let email = isEdit ? isEdit.data.email : "";

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

  const handleReset = () => {
    resetDni();
    resetName();
    resetFatherLastName();
    resetMotherLastName();
    resetBirthDate();
    resetTelephone();
    resetAddress();
    resetEmail();
  }
  const handleAdd = () => {
    const username = window.localStorage.getItem("username");
    let body = {
      dni: valueDni,
      name: valueName,
      fatherLastName: valueFatherLastName,
      motherLastName: valueMotherLastName,
      birthDate: valueBirthDate,
      telephone: valueTelephone,
      address: valueAddress,
      email: valueEmail,
      createdBy: username,
      updatedBy: username,
    }
    console.log(colorFormText);
    let isValid = handleValidations(body, setColorFormText, colorFormReset);
    if(isValid){
      if(isEdit) {
        handleEdit("persons/", body, id, handleReset, setIsEdit)
      } else {
        handleCreate("persons/", body, handleReset);
      }
    }
  };

  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="container col-md-4">
        <div className="card">
          <div className="card-header">
            <h3 align="center">{i18n.personForm.formTitle}</h3>
          </div>
          <div className="card-body">
            <form className="">
              <FormInput
                labelContent={i18n.personForm.formLabelDni} 
                formText={i18n.personForm.formTextDni}
                color={colorFormText.dni}
                minLength="3"
                maxLength="10"
                bind={bindDni}
              ></FormInput>
              <FormInput
                labelContent={i18n.personForm.formLabelName} 
                formText={i18n.personForm.formTextName}
                color={colorFormText.name}
                minLength="3"
                maxLength="30"
                bind={bindName}
              ></FormInput>
              <FormInput
                labelContent={i18n.personForm.formLabelFatherLastName} 
                formText={i18n.personForm.formTextFatherLastName}
                color={colorFormText.fatherLastName}
                minLength="3"
                maxLength="30"
                bind={bindFatherLastName}
              ></FormInput>
              <FormInput
                labelContent={i18n.personForm.formLabelMotherLastName}
                formText={i18n.personForm.formTextMotherLastName}
                color={colorFormText.motherLastName}
                minLength="3"
                maxLength="30"
                bind={bindMotherLastName}
              ></FormInput>
              <FormInput
                labelContent={i18n.personForm.formLabelBirthDate} 
                formText={i18n.personForm.formTextBirthDate}
                color={colorFormText.birthDate}
                type="date"
                bind={bindBirthDate}
              ></FormInput>
              <FormInput
                labelContent={i18n.personForm.formLabelTelephone}
                formText={i18n.personForm.formTextTelephone}
                color={colorFormText.telephone}
                minLength="3"
                maxLength="30"
                bind={bindTelephone}
              ></FormInput>
              <FormInput
                labelContent={i18n.personForm.formLabelAddress}
                formText={i18n.personForm.formTextAddress}
                color={colorFormText.address}
                minLength="3"
                maxLength="60"
                bind={bindAddress}
              ></FormInput>
              <FormInput
                labelContent={i18n.personForm.formLabelEmail}
                formText={i18n.personForm.formTextEmail}
                color={colorFormText.email}
                minLength="3"
                maxLength="30"
                bind={bindEmail}
              ></FormInput>
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
