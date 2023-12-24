import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import {PeliculasContexto} from './PeliculasContexto';
import '../styles/titulocomprar.css'
import { ContadorContexto } from './ContadorContexto';

export const TituloAlquiler = () => {
    
    const { peliculaId } = useParams();
    const { peliculas } = useContext(PeliculasContexto);
    const pelicula = peliculas.find(r => r.id === peliculaId);
    const {globalClicks} = useContext(ContadorContexto);
    

    if(!pelicula){
        return <h2>Pelicula no encontrada</h2>
    }

    return(
        <div className="titulo__comprar">
            <h1>ALQUILER PELÍCULA</h1>
            <h1>Valor a Pagar: ${globalClicks * pelicula.precioAlquiler}</h1>
        </div>
    );
};