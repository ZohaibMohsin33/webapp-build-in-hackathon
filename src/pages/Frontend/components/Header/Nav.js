import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../../context/AuthContext';
import { signOut } from 'firebase/auth';
import {auth} from "../../../../config/firebase";

const handleLogout = ()=>{
    window.notify("You are out now","success");
}
export default function Nav() {

    const { isAuthenticated, dispatch } = useContext(AuthContext);

    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            dispatch({ type: "LOGOUT" });
        }).catch((error) => {
            // An error happened.
            alert("Could not signOut");
        });
        
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-info Navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand text-white">Event Mangers</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-white" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/events' className="nav-link text-white">Events</Link>
                            </li>
                            {isAuthenticated &&
                            <li className="nav-item">
                                <Link to='/owncreated' className="nav-link text-white">Own Created</Link>
                            </li>
}

                        </ul>

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                            {!isAuthenticated ?

                                <li className="nav-item">
                                    <Link className="nav-link active text-white" to='/auth/signup'>
                                        <i className="fa-solid fa-user text-white mx-2"></i>
                                        Signup
                                    </Link>
                                </li>
                                :
                                <>
                                    <li className="nav-item">
                                        <Link to='/dashboard' className="nav-link text-white">
                                            <i className="fas fa-yin-yang mx-2"></i>
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link text-white bg-transparent border-0" onClick={handleLogout}>
                                            
                                            <i className="fa fa-sign-out text-white mx-2" aria-hidden="true"></i>
                                            Logout
                                        </button>
                                    </li>
                                </>
                            }
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}
