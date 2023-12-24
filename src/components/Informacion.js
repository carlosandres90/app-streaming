import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import {PeliculasContexto} from './PeliculasContexto';
import '../styles/informacion.css';


export const Informacion = () => {

    const { peliculaId } = useParams();
    const { peliculas } = useContext(PeliculasContexto);
    const pelicula = peliculas.find(r => r.id === peliculaId);

    if(!pelicula){
        return <h2>Pelicula no encontrada</h2>
    }

    return(
        <div className='verinfo'>
            <div className='verinfo__contenedor--trailer'>
                <h1 className='contenedor__titulo'>Trailer</h1>

                <iframe width="860" height="515" 
                src={pelicula.urlTrailer} 
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen></iframe>

            </div>
            <div className='verinfo__contenedor'>
                <h1 className='contenedor__titulo'>Información</h1>
                <h3 className='contenedor__subtitulo'>Nombre: {pelicula.nombre}</h3>
                <h3 className='contenedor__subtitulo'>Director: {pelicula.director}</h3>
                <h3 className='contenedor__subtitulo'>Año publicación: {pelicula.añoPublicacion}</h3>
                <h3 className='contenedor__subtitulo'>Duración: {pelicula.duracion}</h3>
                <h3 className='contenedor__subtitulo'>Críticas: {pelicula.criticas}</h3>
            </div>
            <div className='verinfo__contenedor'>
                <h1 className='contenedor__titulo'>Sinopsis</h1>
                <h3 className='contenedor__subtitulo'>{pelicula.sinopsis}</h3>
            </div>
            <div className='verinfo__contenedor--botones'>
                <Link to={`/comprar/${pelicula.id}`}>
                    <button className='contenedor__boton'>Comprar ${pelicula.precioCompra}</button>
                </Link>
                <Link to={`/alquiler/${pelicula.id}`}>
                    <button className='contenedor__boton'>Alquilar ${pelicula.precioAlquiler}</button>
                </Link>
            </div>
        </div>
    );
};