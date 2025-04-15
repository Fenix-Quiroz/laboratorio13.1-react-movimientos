export const routesPrefixes = {
    accountList: "/account-list",
    transfer: "/transfer",
}

export const AppRoutes = {
    root: "/",
    accountList: routesPrefixes.accountList,
    editAccount: "/edit-account/:id",
    movements: "/movements/:id",
    transfer: routesPrefixes.transfer,
    transferFromAccount: `${routesPrefixes.transfer}/:id`,
}