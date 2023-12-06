import './assets/styles/App.scss';
import HomePage from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import BreedInfo from './pages/BreedInfo';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { useState, useEffect } from 'react';

import OrganizationsContext from './context/OrganizationsContext';
import * as petfinder from './utils/petfinder';
export const UserContext = React.createContext();

function App() {
  const [organizations, setOrganizations] = useState({});

  useEffect(() => {
    async function fetchOrganizations() {
      const orgs = await petfinder.getOrganizations();
      setOrganizations(orgs);
    }
    fetchOrganizations();
  }, []);

  return (
    <OrganizationsContext.Provider value={organizations}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header></Header>}>
              <Route index element={<HomePage></HomePage>}></Route>
              <Route path="/login" element={<Login></Login>}></Route>
              <Route path="/signup" element={<SignUp></SignUp>}></Route>
              <Route path="/profile" element={<Profile></Profile>}></Route>
              <Route path="/breedinfo/:breed" element={<BreedInfo></BreedInfo>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </OrganizationsContext.Provider>
  );
}

export default App;
