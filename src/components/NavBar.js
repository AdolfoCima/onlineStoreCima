import './NavBar.css';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar =({ children }) => {
    return (
        <header className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="container-fluid">
                    <NavLink to='/' className="navbar-brand active"  >
                        GAMER STORE
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarText"
                        aria-controls="navbarText"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link active" aria-current="page">
                                    Inicio
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle active" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Productos
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="/category/teclados">Teclados</Link></li>
                                    <li><Link className="dropdown-item" to="/category/monitores">Monitores</Link></li>
                                    <li><Link className="dropdown-item" to="/category/mouse">Mouse</Link></li>
                                </ul>
                            </li>
                        </ul>
                    {children}
                    </div>
                </div>
            </nav>
        </header>
    );
}



