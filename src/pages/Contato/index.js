import { Link } from 'react-router-dom'

export default function Contato() {

    return (
        <div>
            <h1> Contato </h1>
            <span> Contato da empresa (DD) </span><br/>

            <Link to="/sobre"> Sobre </Link><br/>
            <Link to="/"> Home </Link><br/>

        </div>
    );
}