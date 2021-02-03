// React
import React from "react";
import { useHistory } from "react-router";
// Others
import ButtonGroup from "./ButtonGroup";
import arrayBuilder from "./ButtonArrayBuilder"
import i18n from "./../../i18n/i18n"
import logo from "./logo.svg";
import "./NavigationBar.css";

const NavigationBar = () => {

  const history = useHistory();
  const navigateUsersForm = () => { history.push("/users-form");}
  const navigateUsersTable = () => { history.push("/users-table");}
  const navigatePersonsForm = () => { history.push("/persons-form");}
  const navigatePersonsTable = () => { history.push("/persons-table");}
  const navigateProcessForm = () => { history.push("/");}
  const navigateProcessTable = () => { history.push("/");}
  const navigateReportUsers = () => { history.push("/");}
  const navigateReportPersons = () => { history.push("/");}
  const navigateReportProcess= () => { history.push("/");}
  const navigateSystem= () => { history.push("/");}
  const navigateLogin = () => { history.push("/login");}
  const btnUsers = arrayBuilder.getArrayAdmin(navigateUsersForm, navigateUsersTable);
  const btnPersons = arrayBuilder.getArrayAdmin(navigatePersonsForm, navigatePersonsTable);
  const btnProcess = arrayBuilder.getArrayAdmin(navigateProcessForm, navigateProcessTable);
  const btnReports = arrayBuilder.getArrayReports(
    navigateReportUsers, 
    navigateReportPersons,
    navigateReportProcess
  );
  const btnOptions = arrayBuilder.getArrayOptions(navigateSystem, navigateLogin)

  return (
    <div>
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <a className="navbar-brand" href="/nav-bar">
        <img src={logo} className="App-logo-bar" alt="logo" />
      </a>
      <ul className="navbar-nav">
        <ButtonGroup
          buttonGroupTitle={i18n.navBar.groupButtonsUsers}
          buttonsArray={btnUsers}
        >
        </ButtonGroup>
        <ButtonGroup
          buttonGroupTitle={i18n.navBar.groupButtonsPersons}
          buttonsArray={btnPersons}
        >
        </ButtonGroup>
        <ButtonGroup
          buttonGroupTitle={i18n.navBar.groupButtonsProcess}
          buttonsArray={btnProcess}
        >
        </ButtonGroup>
        <ButtonGroup
          buttonGroupTitle={i18n.navBar.groupButtonsReports}
          buttonsArray={btnReports}
        >
        </ButtonGroup>
      </ul>
      <ul className="navbar-nav ml-auto nav-flex-icons">
        <ButtonGroup
          buttonGroupTitle={i18n.navBar.groupButtonsOptions}
          buttonsArray={btnOptions}
        >
        </ButtonGroup>
      </ul>
    </nav>
  </div>
  );
};

export default NavigationBar;
