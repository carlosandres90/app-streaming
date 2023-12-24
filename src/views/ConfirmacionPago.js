import React from 'react';

import { Footer } from "../components/Footer";
import { Header } from '../components/Header';
import '../styles/confirmacionpago.css';


export const ConfirmacionPago = () => {
    return(
        <div className='confirmacion'>
            <Header></Header>
            <h1 className='confirmacion__titulo'>Pago realizado con éxito</h1>
            <Footer></Footer>
        </div>
    );
};