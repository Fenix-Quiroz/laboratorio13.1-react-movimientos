import { FormValidationResult } from "@/common/validations/validation.model";
import { CreateAccounError, Account } from "../account.vm";
import { validateAlias, validateCountType } from "./account-field.validation";

export const validateForm = (
  account: Account
): FormValidationResult<CreateAccounError> => {
  const fieldValidatonsResults = [
    validateCountType(account.type),
    validateAlias(account.name),
  ];

  return {
    succeeded: fieldValidatonsResults.every((result) => result.succeeded),
    errors: {
      accountId: fieldValidatonsResults[0].errorMessage ?? "",
      name: fieldValidatonsResults[1].errorMessage ?? "",
    },
  };
};
