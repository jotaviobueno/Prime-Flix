import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/index.js'
import Sobre from '../pages/Sobre/index.js'
import Contato from '../pages/Contato/index.js'


export default function RoutesApp() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home/> } />
                <Route path='/sobre' element={ <Sobre/> } />
                <Route path='/contato' element={ <Contato/> } />

            </Routes>
        </BrowserRouter>
    );
}