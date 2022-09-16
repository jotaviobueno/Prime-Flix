import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Header from '../components/Header/Header.js';

// Pages
import Home from '../pages/Home/Home.js';
import Movies from '../pages/Movies/Movies.js';
import Error from '../pages/Error/Error.js';
import Saved from '../pages/Saved/Saved.js';

export default function RoutesApp() {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path= '/' element= { <Home/> } />
                <Route path= '/movie/:id' element= { <Movies/> } />
                <Route path= '/favoritos' element= { <Saved/> } />


                <Route path= '*' element= { <Error/> } />
            </Routes>
        </BrowserRouter>
    );
}