import {
  AccountListPage,
  CreateAccountPage,
  LoginPage,
  MovementListPage,
  TransferPage,
} from "@/pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoutes } from "./routes";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.root} element={<LoginPage />} />
        <Route path={AppRoutes.accountList} element={<AccountListPage />} />
        <Route path={AppRoutes.createAccount} element={<CreateAccountPage />} />
        <Route path={AppRoutes.movements} element={<MovementListPage />} />
        <Route path={AppRoutes.transfer} element={<TransferPage />} />
        <Route
          path={AppRoutes.transferFromAccount}
          element={<TransferPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};
