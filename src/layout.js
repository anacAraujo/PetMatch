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
                <div className="container-fluid">
                    <div className="row justify-content-center mt-3">
                        <div className="col-md-4 text-center">
                        </div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/components/profile">Profile</Link>
                                </li>
                            </ul>
                        </nav>

                        <Outlet />
                    </div>
                </div>
            </UserContext.Provider>
        )
    } else {
        return (
            <UserContext.Provider value={{ isLogado: isLog, func: updateIsLog }}>

                <div className="container-fluid">
                    <div className="row justify-content-center mt-3">
                        <div className="col-md-4 text-center">                        </div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/components/login">Login</Link>
                                </li>
                            </ul>
                        </nav>

                        <Outlet />
                    </div>
                </div>
            </UserContext.Provider>

        )
    }

}
