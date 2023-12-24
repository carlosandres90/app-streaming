
import { PeliculasRouter }  from './routes/PeliculasRouter';
import { PeliculasContexto } from './components/PeliculasContexto';
import { usePeliculas } from './hooks/usePeliculas';




function App() {
    const peliculas = usePeliculas();
    return(
        <PeliculasContexto.Provider value={{peliculas}}>
            <PeliculasRouter></PeliculasRouter>
        </PeliculasContexto.Provider>
        
    );
}

export default App;