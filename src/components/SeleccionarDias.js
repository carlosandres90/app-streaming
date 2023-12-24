import React, { useContext } from "react";
import '../styles/seleccionardias.css'
import { ContadorContexto } from "./ContadorContexto";

export const SeleccionarDias = () => {

    const {globalClicks, incrementar, decrementar} = useContext(ContadorContexto);

    return (
        <div className="contador">
            <div className="contador__dias">
                <h3 className="dias__titulo">Cuántos días?</h3>
                <h3 className="dias__titulo">{globalClicks} días</h3>
            </div>
            <button className="contador__boton" onClick={()=>incrementar()}> + </button>
            <button className="contador__boton" onClick={()=>decrementar()}> - </button>
        </div>
    );
}