import React from "react";
import NotFound from '../views/NotFound';
import { Principal } from "../views/Principal";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Alquiler } from "../views/Alquilar";
import { Comprar } from "../views/Comprar";
import { VerInfo } from '../views/VerInfo';
import Esperar from "../views/Esperar";
import { ConfirmacionPago } from "../views/ConfirmacionPago";
import { Buscar } from "../views/Buscar";

export const PeliculasRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Principal />}/>
                <Route path="/alquiler/:peliculaId" element={<Alquiler />}/>
                <Route path="/comprar/:peliculaId" element={<Comprar />}/>
                <Route path="/verinfo/:peliculaId" element={<VerInfo />}/>
                <Route path="/confirmacion" element={<Esperar />}/>
                <Route path="/confirmacionFinal" element={<ConfirmacionPago />}/>
                <Route path="/busqueda" element={<Buscar />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    );
};