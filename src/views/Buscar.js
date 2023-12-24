import React from 'react';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BarraBusqueda } from "../components/BarraBusqueda";


export const Buscar = () => {
    return(
        <div className='buscar'>
            <Header></Header>
            <BarraBusqueda></BarraBusqueda>
            <Footer></Footer>
        </div>
    );
};