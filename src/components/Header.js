import React from "react";
import Logo from "../assests/logo003.png";
import '../styles/header.css'
import { Link } from "react-router-dom";

export const Header = () => {

    return(
        <header className="headers">
            <div className="headers_header">
                <div className="header__logo">
                    <img className="logo__imagen" src={Logo} alt="streamingLogo"/>
                </div>
                <h1 className="header__titulo">Plataforma de Streaming On-Line</h1>
                <nav className="header_nav">
                    <Link to={`/`}>
                        Inicio
                    </Link>
                    <Link to={`/busqueda`}>
                        Buscar
                    </Link>
                </nav>
            </div>
        </header>
    );
};