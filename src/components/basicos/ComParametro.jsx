import React from "react"

export default function ComParametro(props) {

    const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'
    const notaInt =Math.ceil(props.nota)

    return ( 

        <div>
            <h4>{props.titulo}</h4>
            <p>
              <strong>{ props.aluno }</strong> 
              tem nota
              <strong> { props.nota} </strong> 
              e está 
              <strong> {status} </strong>!
              <br></br>
            </p>
        </div>
    )
}