import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import React from "react";
import { UserContext } from "../layout";

export default function Profile() {
    const navigate = useNavigate();
    const user = auth.currentUser;

    const value = React.useContext(UserContext);

    const logoutUser = async (e) => {
        e.preventDefault();

        await signOut(auth);
        value.func(false);
        navigate("/");
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center mt-5">
                <div className="col-md-4 text-center mt-5">
                    <p>Welcome <em className="text-decoration-underline">{user.email}</em>. You are logged in!</p>
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary pt-3 pb-3" onClick={(e) => logoutUser(e)}>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}