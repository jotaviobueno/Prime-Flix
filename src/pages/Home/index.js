import { Link } from 'react-router-dom'

export default function Home() {

    return (
        <div>
            <h1> Bem vindo a pagina Home </h1>

            <Link to="/sobre"> Sobre </Link> <br/>
            <Link to="/contato"> contatos </Link>

        </div>
    );
}