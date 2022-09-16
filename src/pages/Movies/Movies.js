import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./MovieInfo.css";
import { toast } from 'react-toastify';

import api from '../../Services/API.js'

export default function Movies() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [ movie, setMovie ] = useState({});
    const [ loading, setLoading ] = useState(true);
    
    useEffect( () => {
        async function loadMovie() {
            try {
                const Movie = await api.get(`movie/${id}`, {
                    params: {
                        api_key: "73117f4551e1b45180293abaac3a094b",
                        language: "pt-BR",
                    }
                });

                setMovie(Movie.data);
                setLoading(false);

            } catch (e) {
                navigate("/", { replace: true });
            }
        }

        loadMovie();

        return () => {
            console.log("Componente foi desmontado");
        }

    }, [ navigate, id ]);

    function saveMovie() {
        const list = localStorage.getItem("@primeFlix");
        let movieSave = JSON.parse(list) || [];
        const hasMovie = movieSave.some( (save) => save.id === movie.id );

        if ( hasMovie )
            return toast.warn("Filme já está adicionado na sua lista.")
        
        movieSave.push(movie);
        localStorage.setItem("@primeFlix", JSON.stringify(movieSave));

        toast.success("Filme salvo com sucesso!")
        

    }

    if ( loading ) {
        return(
            <div className="filme-info"> Carregando detalhes... </div>
        )
    }

    return(
        <div className="filme-info">
            <h1> { movie.title } </h1>
            <img src= {`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt= { movie.title } />
            
            <h3> Sinopse </h3>
            <span> { movie.overview } </span>

            <strong> Avaliação: { movie.vote_average } / 10 </strong>

            <div className="area-button">
                <button onClick={saveMovie}> Salvar </button>
                <button> <a target="blank" href= {`http://youtube.com/results?search_query=${movie.title} Trailer`} rel="noreferrer"> Trailer </a> </button>
            </div>
        </div>
    )
}