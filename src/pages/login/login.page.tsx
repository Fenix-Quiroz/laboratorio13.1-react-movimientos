import React from "react";
import { Credentials } from "./login.vm";
import { LoginFormComponent } from "@/pages/login/components";
import { useNavigate } from "react-router-dom";
import { mapCredentialFromVmToApi } from "./login.mapper";
import { isValidLogin } from "./api";
import { AppRoutes } from "@/core/router";
import classes from "./login.page.module.css";
import { useProfileContext } from "@/core/profile";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { setUserProfile } = useProfileContext();

  const handleSubmit = (credentials: Credentials) => {
    const apiCredentials = mapCredentialFromVmToApi(credentials);
    isValidLogin(apiCredentials).then((isValid) => {
      if (isValid) {
        navigate(AppRoutes.accountList);
        setUserProfile(credentials.user);
      } else {
        alert("Usuario o clave no correctas");
      }
    });
  };
  return (
    <>
      <header className={classes.header}>
        <img
          className={classes.logo}
          src="assets/logo_header.svg"
          alt="Logo."
        />
      </header>
      <div className={classes.bgImg}></div>
      <div className={classes.box}>
        <h1>Acceso</h1>
        <LoginFormComponent onLogin={handleSubmit} />
        <h4 className={classes.inputFooter}>
          Esta usted en un <strong>sitio seguro</strong>
        </h4>
      </div>
    </>
  );
};
