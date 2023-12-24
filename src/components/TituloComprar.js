import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import {PeliculasContexto} from './PeliculasContexto';
import '../styles/titulocomprar.css'



export const TituloComprar = () => {
    
    const { peliculaId } = useParams();
    const { peliculas } = useContext(PeliculasContexto);
    const pelicula = peliculas.find(r => r.id === peliculaId);

    if(!pelicula){
        return <h2>Pelicula no encontrada</h2>
    }

    return(
        <div className="titulo__comprar">
            <h1>COMPRAR PELÍCULA</h1>
            <h1>VALOR A PAGAR: ${pelicula.precioCompra}</h1>
        </div>
    );
};