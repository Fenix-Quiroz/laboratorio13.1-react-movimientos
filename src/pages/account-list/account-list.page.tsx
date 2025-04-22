import React, { useEffect, useState } from "react";
import { AccountVm } from "./account-list.vm";
import { AppLayout } from "@/layouts";
import classes from "./account-list.page.module.css";
import { AccountListTableComponent } from "./components";
import { getAcccountList } from "./api";
import { mapAcountListFromApiToVm } from "./account-list.mapper";
import { AppRoutes } from "@/core/router";
import { Link } from "react-router-dom";

export const AccountListPage: React.FC = () => {
  const [accountList, setAccountList] = useState<AccountVm[]>([]);
  useEffect(() => {
    getAcccountList().then((result) =>
      setAccountList(mapAcountListFromApiToVm(result))
    );
  }, []);
  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Mis cuentas</h1>
          <Link to={AppRoutes.createAccount}>
            <button>Agregar nueva cuenta</button>
          </Link>
        </div>
        <AccountListTableComponent accountList={accountList} />
      </div>
    </AppLayout>
  );
};
