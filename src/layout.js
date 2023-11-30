import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
export const UserContext = React.createContext();


export default function Layout() {

    const [isLog, setLog] = useState(false);
    const updateIsLog = (dadosfilho) => {
        setLog(dadosfilho);
    }


    if (isLog === true) {
        return (
            <UserContext.Provider value={{ isLogado: isLog, func: updateIsLog }}>
                <div>
                    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">PET MATCH</a>
                            <div className="collapse navbar-collapse" id="navbarText">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/profile">Profile</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <Outlet />
                </div>

            </UserContext.Provider>
        )
    } else {
        return (
            <UserContext.Provider value={{ isLogado: isLog, func: updateIsLog }}>

                <div>
                    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">PET MATCH</a>
                            <div className="collapse navbar-collapse" id="navbarText">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <Outlet />
                </div>

            </UserContext.Provider>

        )
    }

}
