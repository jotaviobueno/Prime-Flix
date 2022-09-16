import "./header.css";
import { Link } from 'react-router-dom';

export default function Header() {

    return(
        <header>
            <Link className="logo" to= "/"> Prime Flix </Link>
            <Link className="favoritos" to= "/favoritos"> Meus Filmes </Link>
        </header>
    );
}