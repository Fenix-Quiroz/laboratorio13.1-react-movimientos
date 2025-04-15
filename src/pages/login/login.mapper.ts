import * as ApiModel from "./api/login.api-model";
import * as viewModel from "./login.vm";

export const mapCredentialFromVmToApi = (
  credentials: viewModel.Credentials
): ApiModel.Credentials => ({
  user: credentials.user,
  password: credentials.password,
});
