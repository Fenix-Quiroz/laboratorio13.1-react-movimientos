export const routesPrefixes = {
    accountList: "/account-list",
    transfer: "/transfer",
}

export const AppRoutes = {
    root: "/",
    accountList: routesPrefixes.accountList,
    createAccount: "/create-account",
    movements: "/movements/:id",
    transfer: routesPrefixes.transfer,
    transferFromAccount: `${routesPrefixes.transfer}/:id`,
}