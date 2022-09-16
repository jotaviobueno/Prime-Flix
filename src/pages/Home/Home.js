// Dependencies 
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

import api from '../../Services/API.js';

// https://api.themoviedb.org/3/movie/now_playing?api_key=73117f4551e1b45180293abaac3a094b&language=pt-BR

export default function Home() {

    const [ movie, setMovie ] = useState([]);
    const [ loading, setLoading ] = useState( true );

    useEffect( () => {

        async function loadMovies() {
            const movies = await api.get('movie/now_playing', {
                params: {
                    api_key: "73117f4551e1b45180293abaac3a094b",
                    language: "pt-BR",
                    page: 1
                }
            });

            setMovie(movies.data.results.splice(0, 10));
            setLoading(false);
        }

        loadMovies();
    }, []);

    if ( loading ) {
        return(
            <div className='loading'>
                <h2> Loading movies... </h2>
            </div>
        );
    }

    return(
        <div className='container'>
            <div className='list'>
                { movie.map( item => {
                    return (
                    <article key= { item.id } >
                        <strong> { item.title } </strong>
                        <img src= {`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt= { item.title } />

                        <Link to= {`/movie/${item.id}`}> Acessar </Link>
                    </article>
                    )})
                }
            </div>
        </div>
    )
}