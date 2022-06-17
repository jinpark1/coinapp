import { useReducer } from 'react';
import Routes from './Routes';
import Navbar from './Components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { GlobalContext, initialState } from './Store';
import { reducer } from './Store/reducer';

function App() {
  const [globalState, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={[globalState, dispatch]}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          { Routes }
        </div>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
