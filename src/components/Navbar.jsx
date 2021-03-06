import React from "react";
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">React Home</Link>
            <div>
                <div className="d-flex">
                    <NavLink 
                        className="btn btn-dark mr-4" 
                        to="/"
                        exact
                    >
                        Inicio
                    </NavLink>
                    <NavLink 
                        className="btn btn-dark mr-4" 
                        to="/admin"
                    >
                        Admin
                    </NavLink>
                    <NavLink 
                        className="btn btn-dark" 
                        to="/login"
                    >
                        Login
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar