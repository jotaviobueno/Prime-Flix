import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/index.js'
import Sobre from '../pages/Sobre/index.js'
import Contato from '../pages/Contato/index.js'
import Produto from '../pages/Produto/index.js'

// Error
import Error from '../pages/Error/index.js'

import Header from '../components/Header/index.js'

export default function RoutesApp() {

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={ <Home/> } />
                <Route path='/sobre' element={ <Sobre/> } />
                <Route path='/contato' element={ <Contato/> } />
                <Route path='/produto/:id' element= { <Produto/> } />

                <Route path="*" element= { <Error/> } />
            </Routes>
        </BrowserRouter>
    );
}