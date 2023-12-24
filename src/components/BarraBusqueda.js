import React, { useContext } from "react";
import {useState} from "react";
import {PeliculasContexto} from './PeliculasContexto';
import '../styles/busqueda.css'

export const BarraBusqueda = () => {

    const { peliculas } = useContext(PeliculasContexto);    
    const [q, setQ] = useState("");

    function buscar(items) {
        return items.filter((item) => {
            if (item.nombre === q) {
                return item
            }
            else
                return false
        });
    }


    return (
        <div>
            <div className="contenedor_buscar">
                    <label>
                        <input
                            type="buscar"
                            name="buscar-form"
                            id="buscar-form"
                            className="buscar__entrada"
                            placeholder="Búsqueda"
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                        />
                    </label>                   
            </div>            
            <div className="contenedor_informacion" >
                {buscar(peliculas).map((item) => (
                    <div>
                        <div className='informacion__contenido--trailer'>
                            <h1>{item.nombre}</h1>
                            <iframe width="860" height="515" 
                            src={item.urlTrailer} 
                            title="YouTube video player" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen></iframe>

                        </div>
                        <div className='informacion__contenido'>
                            <h1 className="contenido__titulo">Información</h1>
                            <h3 className="contenido__subtitulo">Nombre: {item.nombre}</h3>
                            <h3 className="contenido__subtitulo">Director: {item.director}</h3>
                            <h3 className="contenido__subtitulo">Año publicación: {item.añoPublicacion}</h3>
                            <h3 className="contenido__subtitulo">Duración: {item.duracion}</h3>
                            <h3 className="contenido__subtitulo">Críticas: {item.criticas}</h3>
                        </div>
                        <div className='informacion__contenido--sinopsis'>
                            <h1 className="contenido__titulo">Sinopsis</h1>
                            <h3 className="contenido__subtitulo">{item.sinopsis}</h3>
                        </div>
                    </div>
                ))
                } 
            </div>    
        </div>  
    );
}