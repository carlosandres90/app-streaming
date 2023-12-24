import { Link } from "react-router-dom";
import '../styles/peliculas.css'

export const Peliculas = ({idPelicula, imagen, categ}) => {

    return(
        <div className="pelicula" category={categ} >
            
            <Link to={`/verinfo/${idPelicula}`}>
                <img className="pelicula__imagen" src={imagen} alt="imagenPelicula"/>
            </Link>
            
        </div>
    );
}