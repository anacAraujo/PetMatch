import './assets/styles/App.scss';
import HomePage from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import BreedInfo from './pages/BreedInfo';
import Header from './components/Header';
import About from './pages/About';
import Quiz from './pages/Quiz';
import { HashRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { useState, useEffect } from 'react';
import { UserContext } from './context/UserContext';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  function handleIsLoggedUpdate(isLogged) {
    setIsLogged(isLogged);
    localStorage.setItem('isLogged', JSON.stringify(isLogged));
  }

  useEffect(() => {
    const localIsLogged = localStorage.getItem('isLogged');
    if (localIsLogged) {
      setIsLogged(JSON.parse(localIsLogged));
    }
    console.log('localIsLogged: ', localIsLogged);
  }, []);

  return (
    <UserContext.Provider value={{ isLogged: isLogged, setIsLogged: handleIsLoggedUpdate }}>
      <div className="App">
        <HashRouter>
          <Routes>
            <Route path="/" element={<Header></Header>}>
              <Route index element={<HomePage></HomePage>}></Route>
              <Route path="/login" element={<Login></Login>}></Route>
              <Route path="/signup" element={<SignUp></SignUp>}></Route>
              <Route path="/profile" element={<Profile></Profile>}></Route>
              <Route path="/breedinfo/:type/:breed" element={<BreedInfo></BreedInfo>}></Route>
              <Route path="/about" element={<About></About>}></Route>
              <Route path="/quiz" element={<Quiz></Quiz>}></Route>
            </Route>
          </Routes>
        </HashRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
