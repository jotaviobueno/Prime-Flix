// Routes
import RoutesApp from './Routes/routes.js';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function App() {
   
    return(

        <div className='App'>
            <ToastContainer autoClose={3000} />
            <RoutesApp/>
        </div>

    );
}