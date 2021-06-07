import React from 'react';
import { NavLink } from 'react-router-dom';
import Settings from '../_settings';
import Logo from './logo-h.png';
import './style.css';

const Navbar = () => {
    return (
        <nav className="white" role="navigation">
            <div className="nav-wrapper container">
                <a id="logo-container" href="index.html" className="brand-logo">
                    <img src={Logo} />
                </a>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to={Settings.ABOUT}>Sobre Integra</NavLink></li>
                    <li><NavLink to={Settings.PROJECTS}>Proyectos</NavLink></li>
                    <li><NavLink to={Settings.ALLIANCES}>Alianzas</NavLink></li>
                    <li><NavLink to={Settings.BLOG}>Blog</NavLink></li>
                </ul>
                <ul id="nav-mobile" className="sidenav">
                    <li><NavLink to={Settings.ABOUT}>Sobre Integra</NavLink></li>
                    <li><NavLink to={Settings.PROJECTS}>Proyectos</NavLink></li>
                    <li><NavLink to={Settings.ALLIANCES}>Alianzas</NavLink></li>
                    <li><NavLink to={Settings.BLOG}>Blog</NavLink></li>
                </ul>
                <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            </div>
        </nav>
    );
};

export default Navbar;