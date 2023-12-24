import React from 'react';
import {Link} from "react-router-dom";
import useRedirection from "../hooks/useRedirection";
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import '../styles/esperar.css'

    function Esperar() {

        useRedirection("/confirmacionFinal", 3000);

        return (
            <div className="esperar">
                <Header></Header>
                    <Link to={"/confirmacionFinal"}> {/* Añadimos un enlace a la vista de restaurantes */}
                        <h1 className='esperar__titulo'>Realizando Pago...</h1>
                    </Link>
                    <span className="esperar__laser--original"></span> {/* Puntero láser original */}
                    <span className="esperar__laser--reverse"></span> {/* Nuevo puntero láser en sentido contrario */}
                <Footer></Footer>
            </div>
        );
    }

    export default Esperar;