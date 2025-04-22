import React, { useEffect, useState } from "react";
import {
  AccountVm,
  createEmptyTranferVm,
  createEmptyTransferError,
  TransferError,
  TransferVm,
} from "../transfer.vm";
import { validateForm } from "../validations";
import classes from "./transfer-form.component.module.css";
interface Props {
  accountList: AccountVm[];
  onTransfer: (transferInfo: TransferVm) => void;
  defaultAccountId?: string;
}

export const TransferFormComponent: React.FC<Props> = (props) => {
  const { accountList, onTransfer, defaultAccountId } = props;
  const [transfer, setTransfer] = useState<TransferVm>(createEmptyTranferVm());
  const [errors, setErrors] = React.useState<TransferError>(
    createEmptyTransferError()
  );

  useEffect(() => {
    setTransfer({ ...transfer, accountId: defaultAccountId ?? "" });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formValidationResult = validateForm(transfer);
    setErrors(formValidationResult.errors);
    if (formValidationResult.succeeded) {
      onTransfer(transfer);
    }
  };
  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setTransfer({ ...transfer, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={classes.formContainer}>
          <div>
            <label>Seleccione cuenta origen</label>
            <select
              name="accountId"
              onChange={handleFieldChange}
              value={transfer.accountId}
              className={classes.large}
            >
              {accountList.map((account) => (
                <option key={account.id} value={account.id}>
                  {account.alias}
                </option>
              ))}
              <option value="">Seleccione una cuenta</option>
            </select>
            <p className={classes.error}>{errors.accountId}</p>
          </div>
          <div>
            <label>Ingrese el IBAN de destino:</label>
            <input
              className={classes.large}
              name="iban"
              onChange={handleFieldChange}
            />
            <p className={classes.error}>{errors.iban}</p>
          </div>
          <div>
            <label>Beneficiario:</label>
            <input
              className={classes.large}
              name="name"
              onChange={handleFieldChange}
            />
            <p className={classes.error}>{errors.name}</p>
          </div>
          <div>
            <label>Importe</label>
            <input
              className={classes.small}
              name="amount"
              onChange={handleFieldChange}
              type="number"
            />
            <p className={classes.error}>{errors.amount}</p>
          </div>
          <div>
            <label>Concepto:</label>
            <input
              className={classes.large}
              name="concept"
              onChange={handleFieldChange}
            />
            <p className={classes.error}>{errors.concept}</p>
          </div>
          <div>
            <label>Observaciones:</label>
            <input
              className={classes.large}
              name="notes"
              onChange={handleFieldChange}
            />
            <p className={classes.error}>{errors.notes}</p>
          </div>
        </div>

        <div className={classes.formContainer}>
          <div>
            <p>
              Para que la transferencia se realize en otro fecha diferente a la
              de hoy , por favor , indique la fecha de ejecucion:
            </p>
            <div>
              <label>Fecha de ejecucion:</label>
              <input
                name="realDateTransfer"
                type="date"
                onChange={handleFieldChange}
              />
              <p className={classes.error}>{errors.realDateTransfer}</p>
            </div>
          </div>
        </div>

        <div className={classes.formContainer}>
          <div>
            <p>Escriba su direccion de email para dar aviso al beneficiario:</p>
            <div>
              <label>Email del beneficiario:</label>
              <input
                className={classes.large}
                name="email"
                onChange={handleFieldChange}
              />
              <p className={classes.error}>{errors.email}</p>
            </div>
          </div>
        </div>
        <button className={classes.botton} type="submit">
          Realizar transferencia
        </button>
      </form>
    </div>
  );
};
