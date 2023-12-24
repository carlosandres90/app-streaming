import React, {useContext} from 'react';
import '../styles/contenedorpeliculas.css'
import { Peliculas } from "./Peliculas.js"
import {LinearProgress} from "@mui/material";
import  { PeliculasContexto }  from './PeliculasContexto.js';

export const ContenedorPeliculas = () => {

    const{ peliculas } = useContext(PeliculasContexto);

    return(
        <div>
            <div className="contenedor__peliculas">
            
            {
                peliculas.length > 0 ? (
                    peliculas.map((pelicula, index) => (
                        <Peliculas
                        key = {index}
                        idPelicula = {pelicula.id}
                        nombrePelicula = {pelicula.nombre}
                        imagen={pelicula.imagen}
                        categ = {pelicula.categ}
                        director = {pelicula.director}
                        añoPublicacion = {pelicula.añoPublicacion}
                        duracion = {pelicula.duracion}
                        criticas = {pelicula.criticas}
                        sinopsis = {pelicula.sinopsis}
                        urlTrailer = {pelicula.urlTrailer}
                        
                    />
                    ))
                    ) : (
                        <LinearProgress color="success"/>
                    )
            }
            {}
            </div>
        </div>
        
    );
};