export interface AccountType {
  id: number;
  type: string;
}

export interface Account {
  type: string;
  name: string;
}

export const createEmptyAccount = (): Account => ({
  type: "",
  name: "",
});

export interface CreateAccounError {
  accountId: string;
  name: string;
}

export const createEmptyCreateAccountError = (): CreateAccounError => ({
  accountId: "",
  name: "",
});
