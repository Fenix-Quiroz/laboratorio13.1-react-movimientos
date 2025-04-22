import { FormValidationResult } from "@/common/validations/validation.model";
import { CredentialsFormErrors } from "./login.vm";
import {
  validationPasswordField,
  validationUserField,
} from "./login-field.validation";

export const validateForm = (
  credentials: CredentialsFormErrors
): FormValidationResult<CredentialsFormErrors> => {
  const fieldValidationsResults = [
    validationUserField(credentials.user),
    validationPasswordField(credentials.password),
  ];

  return {
    succeeded: fieldValidationsResults.every((result) => result.succeeded),
    errors: {
      user: fieldValidationsResults[0].errorMessage ?? "",
      password: fieldValidationsResults[1].errorMessage ?? "",
    },
  };
};
