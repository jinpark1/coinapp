import { createContext } from 'react';

export const initialState: State = {
  balance: '',
  signedIn: false,
  transactions: [],
};

export const GlobalContext = createContext<any>([]);