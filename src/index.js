import ReactDOM from 'react-dom'
import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import './index.css'



ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro titulo="Situação do Aluno " aluno=" Pedro " nota={ 6.3 } />
        <ComParametro titulo="Situação do Aluno " aluno=" Maria " nota={ 9.9 } />
    </div>,
    
    document.getElementById('root')
)
