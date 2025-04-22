import { FormValidationResult } from "@/common/validations/validation.model";
import { TransferError, TransferVm } from "../transfer.vm";
import {
  validateAccountIdField,
  validateAmountField,
  validateConceptField,
  validateEmailField,
  validateIBANField,
  validateNameField,
  validateNotesField,
  validateRealDateTransferField,
} from "./transfer-field.validations";

export const validateForm = (
  trasnfer: TransferVm
): FormValidationResult<TransferError> => {
  const fieldValidationsResults = [
    validateAccountIdField(trasnfer.accountId),
    validateIBANField(trasnfer.iban),
    validateNameField(trasnfer.name),
    validateAmountField(trasnfer.amount),
    validateConceptField(trasnfer.concept),
    validateNotesField(trasnfer.notes),
    validateRealDateTransferField(trasnfer.realDateTransfer),
    validateEmailField(trasnfer.email),
  ];

  return {
    succeeded: fieldValidationsResults.every((result) => result.succeeded),
    errors: {
      accountId: fieldValidationsResults[0].errorMessage ?? "",
      iban: fieldValidationsResults[1].errorMessage ?? "",
      name: fieldValidationsResults[2].errorMessage ?? "",
      amount: fieldValidationsResults[3].errorMessage ?? "",
      concept: fieldValidationsResults[4].errorMessage ?? "",
      notes: fieldValidationsResults[5].errorMessage ?? "",
      realDateTransfer: fieldValidationsResults[6].errorMessage ?? "",
      email: fieldValidationsResults[7].errorMessage ?? "",
      dateTransfer: "",
    },
  };
};
