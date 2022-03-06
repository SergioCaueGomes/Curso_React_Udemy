import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default props => {
    return (
        <div>
            <FamiliaMembro nome="Karla"  sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="Alice"  sobrenome={...props}/>
            <FamiliaMembro nome="Miguel" sobrenome={props.sobrenome}/>
        </div>
    )
}