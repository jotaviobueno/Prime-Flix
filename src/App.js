import React, { useState, useEffect, useMemo, useCallback } from 'react';

export default function App() {

    const [ tarefas, setTarefas ] = useState( []);

    useEffect( () => {
        const tarefasStorage = localStorage.getItem(tarefas);

        if ( tarefasStorage )
            setTarefas(JSON.parse(tarefasStorage))
    }, [] )

    useEffect( () => {
        localStorage.setItem('tarefas', JSON.stringify(tarefas) );
    }, [tarefas] );

    const [ input, setInput ] = useState("");

    const handleAdd = useCallback(() => {
        setTarefas([...tarefas, input ]);
    }, [input, tarefas] );

    const totalTarefas = useMemo( () => tarefas.length, [ tarefas ]);

    return (
        <div>
           <ul>
            { tarefas.map( (tarefa) => {
                return ( <li key= {tarefa} > { tarefa } </li> );
            })}
           </ul>

           <br/>
           <strong> Você tem { totalTarefas } tarefas! </strong><br/>

           <input type= "text" value= { input } onChange= { event => setInput( event.target.value ) } />
           <button type= "button" onClick= { handleAdd }> Adicionar </button>
        </div>
    );
}