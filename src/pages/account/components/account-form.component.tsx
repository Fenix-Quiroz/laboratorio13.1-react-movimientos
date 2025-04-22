import { useState } from "react";
import { ACCOUNT_TYPES } from "../account.const";
import {
  Account,
  CreateAccounError,
  createEmptyAccount,
  createEmptyCreateAccountError,
} from "../account.vm";
import classes from "./account-form.component.module.css";
import { validateForm } from "../validations";
interface Props {
  onCreateAccount: (accountInfo: Account) => void;
}
export const AccountFormComponent: React.FC<Props> = (props) => {
  const { onCreateAccount } = props;
  const [errors, setErrors] = useState<CreateAccounError>(
    createEmptyCreateAccountError()
  );
  const [accountNew, setAccountNew] = useState<Account>(createEmptyAccount());
  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setAccountNew({ ...accountNew, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationResult = validateForm(accountNew);
    setErrors(validationResult.errors);
    onCreateAccount(accountNew);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={classes.formContainer}>
          <div>
            <label>Tipo de cuenta:</label>
            <select
              name="type"
              value={accountNew.type}
              onChange={handleFieldChange}
            >
              <option value="">Seleccione una cuenta</option>
              {ACCOUNT_TYPES.map((account) => (
                <option key={account.id} value={account.id}>
                  {account.type}
                </option>
              ))}
            </select>
            <p className={classes.error}>{errors.accountId}</p>
          </div>
          <div>
            <label>Alias:</label>
            <input
              name="name"
              onChange={handleFieldChange}
              className={classes.small}
              type="text"
              value={accountNew.name}
            />
            <p className={classes.error}>{errors.name}</p>
          </div>
        </div>
        <button className={classes.button}>Guardar</button>
      </form>
    </div>
  );
};
