import { Link } from 'react-router-dom'
import "./style.css"

export default function Header() {
    return(
        <header>
            <h2> Sujeito dev </h2>
        
            <div className='menu'>
                <Link to= '/'> Home </Link>
                <Link to= '/sobre'> Sobre </Link>
                <Link to= '/contato'> Contato </Link>
                
            </div>
        
        </header>
    );
}