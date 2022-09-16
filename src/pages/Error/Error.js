import { Link } from 'react-router-dom';
import "./Error.css"

export default function Error() {
    return(
        
        <div className="not-found">
            <h1> 404 </h1>
            <h2> Pagina não encontrada! </h2>
                <Link className='goback' to= "/"> Veja todos os filmes! </Link>
        </div>
    );
}