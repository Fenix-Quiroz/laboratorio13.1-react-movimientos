import { AppLayout } from "@/layouts";
import React from "react";
import { AccountComponentHeader } from "./components";
import classes from "./account.page.module.css";
import { AccountFormComponent } from "./components/account-form.component";
import { Account } from "./account.vm";
import { saveAccount } from "./api/account-api";

export const CreateAccountPage: React.FC = () => {
  const handlerCreateAccount = (accountInfo: Account) => {
    if (accountInfo.name && accountInfo.type) {
      saveAccount(accountInfo).then((result) => {
        if (result) {
          alert("Cuenta creada con exito");
        } else {
          alert("Error al crear cuenta");
        }
      });
    }
  };
  return (
    <AppLayout>
      <div className={classes.root}>
        <AccountComponentHeader />
        <AccountFormComponent onCreateAccount={handlerCreateAccount} />
      </div>
    </AppLayout>
  );
};
