import { REQUIRED_FIELD_MESSAGE } from "@/common/validations/validations.const";
import { validateForm } from "./login.validation";
import { Credentials } from "./login.vm";

describe("pages/login/login.validation.ts", () => {
  it("Shold return validation  succeeded when both field are informed", () => {
    //Arrange
    const credentials: Credentials = {
      user: "myuser",
      password: "mypassword",
    };
    //Act
    const result = validateForm(credentials);
    //Assert
    expect(result.succeeded).toBeTruthy();
    expect(result.errors.user).toEqual("");
    expect(result.errors.password).toEqual("");
  }),
    it("Shold return validation failed when user empty", () => {
      //Arrange
      const credentials: Credentials = {
        user: "",
        password: "mypassword",
      };
      //Act
      const result = validateForm(credentials);
      //Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errors.user).toEqual(REQUIRED_FIELD_MESSAGE);
      expect(result.errors.password).toEqual("");
    });
  it("Shold return validation failed when password empty", () => {
    //Arrange
    const credentials: Credentials = {
      user: "myuser",
      password: "",
    };
    //Act
    const result = validateForm(credentials);
    //Assert
    expect(result.succeeded).toBeFalsy();
    expect(result.errors.user).toEqual("");
    expect(result.errors.password).toEqual(REQUIRED_FIELD_MESSAGE);
  });
  it("Shold return validation failed when user and password emptys", () => {
    //Arrange
    const credentials: Credentials = {
      user: "",
      password: "",
    };
    //Act
    const result = validateForm(credentials);
    //Assert
    expect(result.succeeded).toBeFalsy();
    expect(result.errors.user).toEqual(REQUIRED_FIELD_MESSAGE);
    expect(result.errors.password).toEqual(REQUIRED_FIELD_MESSAGE);
  });
});
