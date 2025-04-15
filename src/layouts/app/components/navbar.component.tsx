import { AppRoutes, routesPrefixes } from "@/core/router";
import React from "react";
import { generatePath, Link, useLocation, useParams } from "react-router-dom";
import classes from "./navbar.component.module.css";

export const NavbarComponent: React.FC = () => {
  const { pathname } = useLocation();
  const {id} = useParams()
  return (
    <nav className={classes.navbar}>
      <ul className={classes.list}>
        <li
          className={
            pathname.startsWith(routesPrefixes.accountList)
              ? classes.selected
              : ""
          }
        >
          <Link to={AppRoutes.accountList}>Mis cuentas</Link>
        </li>
        <li
          className={
           id && pathname.startsWith(generatePath(AppRoutes.movements, { id }))
              ? classes.selected
              : ""
          }
        >
          <Link to={generatePath(AppRoutes.movements, { id: "1" })}>
            Movimientos
          </Link>
        </li>
        <li
          className={
            pathname.startsWith(routesPrefixes.transfer) ? classes.selected : ""
          }
        >
          <Link to={AppRoutes.transfer}>Transferencias</Link>
        </li>
      </ul>
    </nav>
  );
};
