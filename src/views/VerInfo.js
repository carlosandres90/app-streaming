import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Informacion } from '../components/Informacion';


export const VerInfo = () => {

    return(
        <div className='verinfo'>
            <Header></Header>
            <Informacion></Informacion>
            <Footer></Footer>
        </div>
    );
};

