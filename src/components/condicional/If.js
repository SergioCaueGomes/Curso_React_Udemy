/*
Componente If onde se a expressão for veraddeira renderiza se não não mostra nada. 

ex: <If test={ aluno.nota >= 7 }>
        <span>...</span>
        <span>...</span>
        <span>...</span>
    </If>
*/


export default props => {

    if(props.test) {
        return props.children
    } else {
        return false
    }
}