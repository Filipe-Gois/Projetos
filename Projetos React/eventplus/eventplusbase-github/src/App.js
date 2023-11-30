import './App.css';
import Rotas from './Routes/routes';
import { UserContext } from './Context/AuthContext';
import { useEffect, useState } from 'react';
import { json } from 'react-router-dom';

function App() {
  const [userData, setUserData] = useState({})

  useEffect(() => {
    const token = localStorage.getItem('token')

    setUserData(token === null ? {} : JSON.parse(token))
  }, [])
  return (
    // torna os dados do usuario globais

    <UserContext.Provider value={{ userData, setUserData }}>
      <Rotas />
    </UserContext.Provider >
  );
}

export default App;
