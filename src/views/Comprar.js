import React from 'react';
import { FormularioPago } from "../components/FormularioPago";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { TituloComprar } from '../components/TituloComprar';


export const Comprar = () => {
    return(
        <div className='comprar'>
            <Header></Header>
            <TituloComprar></TituloComprar>
            <FormularioPago></FormularioPago>
            <Footer></Footer>
        </div>
    );
};