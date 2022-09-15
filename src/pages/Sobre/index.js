import { Link } from 'react-router-dom'

export default function Sobre() {

    return (
        <div>
            <h1> Pagina Sobre a empresa </h1>

            <Link to="/"> Home </Link><br/>
            <Link to="/contato"> Contatos </Link>

        </div>
    );
}