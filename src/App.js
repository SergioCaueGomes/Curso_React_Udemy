import React from "react";
import './index.css';
import './App.css';

import ListaAlunos from "./components/repeticao/ListaAlunos";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Fragmento from './components/basicos/Fragmento';
import ComParametro from './components/basicos/ComParametro';
import Primeiro from './components/basicos/Primeiro';

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">

            <Card titulo='#06 - Repetição (Lista Alunos)' color="#7BA61F">
                <ListaAlunos/>
            </Card>
            
            <Card titulo='#05 - Componente com Filho' color="#00C8F8">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro"/>
                    <FamiliaMembro nome="Ana"/>
                    <FamiliaMembro nome="Miguel"/>
                </Familia>
                
            </Card>

            <Card titulo='#04 - Desafio Aleatório' color="#5AA3BF">
                <Aleatorio min={1} max={60} />
            </Card>
            
           <Card titulo='#03 - Fragmento' color="#F2B544">
                <Fragmento />
            </Card>
            
            <Card titulo='#02 - Com Parâmetro' color="#F28D35">
                <ComParametro
                    titulo="Situação do Aluno "
                    aluno=" Pedro "
                    nota={6.3}
                />
                <ComParametro
                    titulo="Situação do Aluno "
                    aluno=" Maria "
                    nota={9.9}
                />
            </Card>

            <Card titulo='#01 - Primeiro Componente' color="">
                            <Primeiro></Primeiro>
            </Card>

            
        </div>
    </div>
);