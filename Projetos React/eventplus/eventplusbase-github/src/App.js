import './App.css';
import Rotas from './routes';
import { UserContext } from './Context/AuthContext';
import { useState } from 'react';

function App() {
  const [userData, setUserData] = useState({})
  return (
    // torna os dados do usuario globais

    <UserContext.Provider value={{ userData, setUserData }}>
      <Rotas />
    </UserContext.Provider >
  );
}

export default App;
