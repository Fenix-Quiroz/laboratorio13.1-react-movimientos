import { FieldValidationResult } from "./validation.model";
import { REQUIRED_FIELD_MESSAGE } from "./validations.const";

export const buildValidationFailedResult = (
  errorMessage: string
): FieldValidationResult => ({
  succeeded: false,
  errorMessage,
});

export const buildValidationSucceededResult = () => ({
  succeeded: true,
});

export const buildRequiredFieldValidationFailedResponse = () => buildValidationFailedResult(REQUIRED_FIELD_MESSAGE);
