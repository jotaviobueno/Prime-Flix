import { useEffect, useState } from "react";
import "./Saved.css";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

export default function Saved() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const list = localStorage.getItem("@primeFlix");
        
        setMovie(JSON.parse(list) || [] );
    }, [])

    function deleteSaveMovie(id) {
        let removeMovie = movie.filter((item) => {
            return (item.id !== id)
        });

        setMovie(removeMovie);
        localStorage.setItem("@primeFlix", JSON.stringify(removeMovie));
        toast.success("Filme removido com sucesso.")
        
    }

    return(
        <div className="my-movies">
            <h1> Meus Filmes </h1>

            { movie.length === 0 && <span> Você não possui nenhum filme salvo. </span> }
            
            <ul>
                {movie.map((item) => {
                    return(

                        <li key={item.id}>
                            <span> { item.title } </span>

                            <div> 
                                <Link to={`/movie/${item.id}`}> Ver detalhes </Link>
                                <button onClick={() => deleteSaveMovie(item.id)}> Excluir </button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}