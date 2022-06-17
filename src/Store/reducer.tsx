const REFRESH_BALANCE = "REFRESH_BALANCE";
const REFRESH_SIGNED_IN = "REFRESH_SIGNED_IN";
const REFRESH_TRANSACTIONS = "REFRESH_TRANSACTIONS";

export const reducer = (state: State, action: any) => {
  switch (action.type) {
    case REFRESH_BALANCE:
      return {
        ...state,
        balance: action.balance
      };
    case REFRESH_SIGNED_IN:
      return {
        ...state,
        signedIn: action.signedIn
      }
    case REFRESH_TRANSACTIONS:
      return {
        ...state,
        transactions: action.transactions
      };
    default:
      return state;
  }
};
