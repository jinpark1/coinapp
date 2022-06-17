const REFRESH_BALANCE = "REFRESH_BALANCE";
const REFRESH_SIGNED_IN = "REFRESH_SIGNED_IN";
const REFRESH_TRANSACTIONS = "REFRESH_TRANSACTIONS";

export const refreshBalance = (balance: string) => ({
  type: REFRESH_BALANCE,
  balance
});

export const refreshSignedIn = (signedIn: boolean) => ({
  type: REFRESH_SIGNED_IN,
  signedIn
});

export const refreshTransactions = (transactions: Transactions) => ({
  type: REFRESH_TRANSACTIONS,
  transactions
})