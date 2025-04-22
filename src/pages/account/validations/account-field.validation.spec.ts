import { REQUIRED_FIELD_MESSAGE } from "@/common/validations/validations.const";
import { validateAlias, validateCountType } from "./account-field.validation";

describe("account-field.validation specs", () => {
  describe("validateCountType", () => {
    it("should return true when count type is informed", () => {
      // Arrange
      const value = "test";
      // Act
      const result = validateCountType(value);
      // Assert
      expect(result.succeeded).toBeTruthy();
    });
    it("should return false when count type is not informed", () => {
      // Arrange
      const value = "";
      // Act
      const result = validateCountType(value);
      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });
  });

  describe("validateAlias", () => {
    it("should return true when alias is informed", () => {
      // Arrange
      const value = "test";
      // Act
      const result = validateAlias(value);
      // Assert
      expect(result.succeeded).toBeTruthy();
    });
    it("should return false when alias is not informed", () => {
      // Arrange
      const value = "";
      // Act
      const result = validateAlias(value);
      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });
  });
});
