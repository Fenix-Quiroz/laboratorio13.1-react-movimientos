import * as apiModel from "./api";
import { mapCredentialFromVmToApi } from "./login.mapper";
import * as viewModel from "./login.vm";

describe("login.mapper spect", () => {
  it("Should return a credential with same propertoes", () => {
    //Arrange
    const vmCredentials: viewModel.Credentials = {
      user: "myuser",
      password: "mypassword",
    };
    const expectApiCredentials: viewModel.Credentials = {
      user: "myuser",
      password: "mypassword",
    };

    //Act
    const result: apiModel.Credentials =
      mapCredentialFromVmToApi(vmCredentials);
    //Assert
    expect(result).toEqual(expectApiCredentials);
  });
});
