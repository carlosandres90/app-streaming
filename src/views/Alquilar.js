import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { TituloAlquiler } from '../components/TituloAlquilar'
import { FormularioPago } from '../components/FormularioPago';
import { SeleccionarDias } from '../components/SeleccionarDias';
import  {ContadorContexto}  from '../components/ContadorContexto';
import { useState } from 'react';



export const Alquiler = () => {
    const [globalClicks, setGlobalClicks] = useState(1);

    let incrementar = () => {
        setGlobalClicks(globalClicks + 1);
    };

    let decrementar = () => {
        if(globalClicks > 1)
            setGlobalClicks(globalClicks - 1);
    };

    return(
        <div className='alquiler'>
            <Header></Header>
            <ContadorContexto.Provider value={{globalClicks, incrementar, decrementar}}>
                <TituloAlquiler></TituloAlquiler>
                <FormularioPago></FormularioPago>
                <SeleccionarDias></SeleccionarDias>
            </ContadorContexto.Provider>
            <Footer></Footer>
        </div>
    );
};