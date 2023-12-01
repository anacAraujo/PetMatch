import './assets/styles/App.scss';
import HomePage from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
export const UserContext = React.createContext();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header></Header>}>
            <Route index element={<HomePage></HomePage>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/signup" element={<SignUp></SignUp>}></Route>
            <Route path="/profile" element={<Profile></Profile>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
