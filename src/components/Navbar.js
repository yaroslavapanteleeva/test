import React, { Fragment } from 'react';
import { connect, useDispatch } from 'react-redux';
import {NavLink}  from 'react-router-dom'
import { signOut } from '../redux/actions/authActions';

const Navbar = ({uid}) => {
    const dispatch = useDispatch()

    const handleSignOut = () => {
        dispatch(signOut())
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink to="/" className="navbar-brand">ToDo LIST</NavLink>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    {(uid) ? (
                        <li className="nav-item">
                            <NavLink to="/login" className="nav-link" onClick={handleSignOut}>Выход</NavLink>
                        </li>  
                    ) : (
                        <Fragment>
                            <li className="nav-item">
                                <NavLink to="/login" className="nav-link" >Вход</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/register" className="nav-link">Регистрация</NavLink>
                            </li> 
                        </Fragment>
                    )} 
                </ul>
            </div>
        </nav>
    )
}

const mapStateToProps = state => {
    const uid = state.firebase.auth.uid
    return {
        uid: uid
    }
}



export default connect(mapStateToProps)(Navbar);