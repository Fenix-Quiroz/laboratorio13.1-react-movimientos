import { useEffect, useState } from "react";
import { Account, getAcccountList } from "../api";
import classes from "./movement-list-header.component.module.css";
import { useParams } from "react-router-dom";

export const MovementListHeaderComponent: React.FC = () => {
  const [acount, setAcount] = useState<Account>({
    balance: 0,
    iban: "",
    name: "",
  });

  const { id } = useParams<string>();
  useEffect(() => {
    if (id) {
      getAcccountList(id).then((result) => setAcount(result));
    }
  }, []);
  return (
    <>
      <div className={classes.headerContainer}>
        <h1>Saldos y Últimos movimientos</h1>
        <p>
          SALDO DISPONIBLE <br /> <span>{acount.balance} $</span>
        </p>
      </div>
      <div className={classes.accountInfo}>
        <span>Alias: {acount.name}</span>
        <span>IBAN: {acount.iban}</span>
      </div>
    </>
  );
};
