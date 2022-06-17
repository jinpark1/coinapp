/// <reference types="react-scripts" />

interface GetAddressAtModel {
	balance: string;
	transactions: {
		amount: string;
		timestamp: string;
		toAddress: string;
	}[];
}

interface State {
  balance: string;
  signedIn: boolean;
  transactions: Transactions;
}

interface Transactions {
  [index: number]: {
    amount: string;
    timestamp: string;
    toAddress: string;
  };
}
