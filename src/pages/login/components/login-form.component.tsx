import {
  createEmptyCredentials,
  createEmptyCredentialsFormErrors,
  Credentials,
} from "@/pages/login/login.vm";
import React, { useState } from "react";
import { validateForm } from "../login.validation";
import classes from "./login-form.component.module.css";

interface Props {
  onLogin: (credentials: Credentials) => void;
}
export const LoginFormComponent: React.FC<Props> = (props) => {
  const { onLogin } = props;
  const [credentials, setCredentials] = useState<Credentials>(
    createEmptyCredentials()
  );

  const [errors, setErrors] = useState(createEmptyCredentialsFormErrors());

  const handleFieldChhange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationResult = validateForm(credentials);
    setErrors(validationResult.errors);
    if (validationResult.succeeded) {
      onLogin(credentials);
    }
  };
  return (
    <>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="username"
            name="user"
            onChange={handleFieldChhange}
            placeholder="Usuario"
            className={errors.user ? classes.inputError : ""}
          />

          {errors.user && <p className={classes.error}>{errors.user}</p>}
        </div>
        <div>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleFieldChhange}
            placeholder="Clave"
            className={errors.password ? classes.inputError : ""}
          />
          {errors.password && (
            <p className={classes.error}>{errors.password}</p>
          )}
        </div>
        <button className={classes.btnEnviar} type="submit">
          Acceder
        </button>
      </form>
    </>
  );
};
