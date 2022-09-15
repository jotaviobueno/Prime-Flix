import { useParams } from 'react-router-dom';

export default function Produto() {

    const { id } = useParams();

    return(
        <div>
            
            <span>MEU PRODUTO É {id}</span>

        </div>
    );
}