import React, { useContext } from "react";
import { useParams } from 'react-router-dom';
import {PeliculasContexto} from './PeliculasContexto';
import {Link} from "react-router-dom";
import '../styles/formulariopago.css'

export const FormularioPago = () => {

    const { peliculaId } = useParams();
    const { peliculas } = useContext(PeliculasContexto);
    const pelicula = peliculas.find(r => r.id === peliculaId);

    if(!pelicula){
        return <h2>Pelicula no encontrada</h2>
    }

    return (
        <div className="contenedor__formulario">
            <img className="formulario__imagen" src={pelicula.imagen} alt=""></img>
            <div className="formulario__tarjeta">
                <h1 className="tarjeta__titulo">{pelicula.nombre}</h1>                
                <form className="tarjeta_formulario" id="formulario-tarjeta">
                    <div className="formulario__grupo">
                        <label for="inputNombre">Nombre Titular:</label>
                        <input type="text" id="inputNombre" maxlength="19" autocomplete="off" placeholder="Juan Torres" required/>
                    </div>
                    <div className="formulario__grupo">
                        <label for="email">Correo electrónico:</label>
                        <input type="text" id="inputNumero" maxlength="19" autocomplete="off" placeholder="mail@hxxxxxxl.com"/>
                    </div>
                    <div className="formulario__grupo">
                        <label for="celular">Celular:</label>
                        <input type="text" id="inputNumero" maxlength="19" autocomplete="off" placeholder="+593 0999999999"/>
                    </div>
                    <div className="formulario__grupo">
                        <label for="inputNumero">Número Tarjeta</label>
                        <input type="text" id="inputNumero" maxlength="19" autocomplete="off" placeholder="841 999 999 999" required/>
                    </div>
                    <div className="formulario__grupo--flebox">
                        <div className="grupo__expira">
                            <div className="formulario__grupo--flebox">
                                <div className="grupo-select">
                                <label for="fecha-expiracion">Fecha de Expiración:</label>
                                    <input type="text" id="fecha-expiracion" name="fecha-expiracion" placeholder="MM/AA" required></input>
                                </div>                            
                            </div>
                        </div>
                        <div className="formulario__grupo__ccv">
                            <label for="inputCCV">CCV</label>
                            <input type="text" id="inputCCV" name="ccv" maxlength="3" required/>
                        </div>
                    </div>
                    <Link to={`/confirmacion`}>
                        <button className="formulario__grupo--boton">Pagar</button>
                    </Link>
                    
                </form>
            </div>
        </div>
        

    );
}