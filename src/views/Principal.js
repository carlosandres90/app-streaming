import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContenedorPeliculas } from '../components/ContenedorPeliculas';

export const Principal = () =>{
    return(
        <div className='principal'>
            <Header></Header>
            <ContenedorPeliculas></ContenedorPeliculas>
            <Footer></Footer>
        </div>
    );
};