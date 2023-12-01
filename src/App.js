import './styles/App.scss';
import HomePage from './components/homepage';
import Login from './components/login';
import Profile from './components/profile';
import SignUp from './components/signup';
import Layout from './layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
export const UserContext = React.createContext();

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route index element={<HomePage></HomePage>}></Route>
            <Route path="/login" element={<Login></Login>} ></Route>
            <Route path="/signup" element={<SignUp></SignUp>} ></Route>
            <Route path="/profile" element={<Profile></Profile>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
