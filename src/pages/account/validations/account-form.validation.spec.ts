import { REQUIRED_FIELD_MESSAGE } from "@/common/validations/validations.const";
import { validateForm } from "./account-form.validation";

describe("account-form.validation specs", () => {
  describe("validateForm", () => {
    it("should return true when all fields are informed", () => {
      // Arrange
      const account = {
        type: "test",
        name: "test",
      };
      // Act
      const result = validateForm(account);
      // Assert
      expect(result.succeeded).toBeTruthy();
      expect(result.errors).toEqual({
        accountId: "",
        name: "",
      });
    });
    it("should return false when any field is not informed", () => {
      // Arrange
      const account = {
        type: "test",
        name: "",
      };
      // Act
      const result = validateForm(account);
      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errors).toEqual({
        accountId: "",
        name: REQUIRED_FIELD_MESSAGE,
      });
    });
  });
});
