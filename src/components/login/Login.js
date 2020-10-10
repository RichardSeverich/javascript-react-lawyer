// React
import { useHistory } from "react-router";
import React, { useState, useEffect } from 'react';
// Others
import "./Login.css";
import mockData from "./../../mock-data/mock-data-manager";
import Logo from "./../logo/Logo";
import { useInput } from './../hooks/useInput';

const Login = () => {

  const { REACT_APP_MOCK_DATA } = process.env;
  const { value:valueUsername, bind:bindUsername, reset:resetUsername } = useInput('');
  const { value:valuePassword, bind:bindPassword, reset:resetPassword } = useInput('');
  const [arrayUsers, setArrayUsers] = useState();
  const history = useHistory();

  useEffect(() => {
    if(REACT_APP_MOCK_DATA=="TRUE"){
      console.log("mock data enable");
      console.log(mockData);
      setArrayUsers(mockData.arrayUsers);
    } else {
      // here should be the API CALL
      console.log("mock data disable");
    }
  });

  const handleLogin = (event) => {
    event.preventDefault();
    let username = valueUsername;
    let password = valuePassword;
    let band = false;
    arrayUsers.forEach(function(user, indice, array) {
      let bandOne = user.dni === username && user.password === password;
      let bandTwo = user.username === username && user.password === password;
      if (bandOne || bandTwo) {
        band = true;
        //break;
      }
    });
    if (band) {
      history.push("/nav-bar");
    } else {
      alert("user or password incorrect");
      resetUsername();
      resetPassword();
    }
  }

  return (
    <div>
      <div className="Login-header">
        <Logo></Logo>
      </div>
      <div className="container col-md-3">
        <div className="card">
          <div className="card-header">
            <h3>Iniciar sesion</h3>
          </div>
          <div className="card-body">
            <form action="">
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control username"
                  minLength="3"
                  maxLength="10"
                  {...bindUsername}
                ></input>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  minLength="3"
                  maxLength="10"
                  {...bindPassword}
                ></input>
              </div>
              <div className="text-center">
                <button
                  onClick={handleLogin}
                  type="button"
                  style={{ marginLeft: "24px" }}
                  className="btn btn-info"
                >
                  Ingresar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
