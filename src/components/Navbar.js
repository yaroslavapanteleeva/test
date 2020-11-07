import React from 'react';
import {NavLink}  from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink to="/" className="navbar-brand">ToDo LIST</NavLink>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" exact className="nav-link" >Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/login" className="nav-link" >Вход</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/register" className="nav-link">Регистрация</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}