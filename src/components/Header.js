import { Outlet, Link } from 'react-router-dom';
import React, { useState } from 'react';
import { IoPersonCircleSharp } from 'react-icons/io5';
export const UserContext = React.createContext();

export default function Header() {
  const [isLog, setLog] = useState(false);
  const updateIsLog = (dadosfilho) => {
    setLog(dadosfilho);
  };

  if (isLog === true) {
    return (
      <UserContext.Provider value={{ isLogado: isLog, func: updateIsLog }}>
        <div>
          <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                PET MATCH
              </Link>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                      Pppp
                    </Link>
                  </li>
                </ul>
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                      <IoPersonCircleSharp size={30}></IoPersonCircleSharp>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Outlet />
        </div>
      </UserContext.Provider>
    );
  } else {
    return (
      <UserContext.Provider value={{ isLogado: isLog, func: updateIsLog }}>
        <div>
          <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                PET MATCH
              </Link>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Outlet />
        </div>
      </UserContext.Provider>
    );
  }
}
