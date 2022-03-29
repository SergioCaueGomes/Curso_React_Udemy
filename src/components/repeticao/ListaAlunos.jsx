import React from "react";
import alunos from "../../data/alunos";

export default props => {

    const listaAlunos = alunos.map(aluno => {

        return (

            <li key={ aluno.id }>
                { aluno.id } - {aluno.nome }, nota = { aluno.nota }
            </li>
        );
    });

    return (
        <div>
            <ul style={{ listStyle: "none", textAlign: "left" }}> 
            
                { listaAlunos } 
            
            </ul>                
        </div>
    )
}