import React from "react";
import "./Card.css";


export default props => {

    const cardStyle = {
        
        backgroundColor: props.color || '#D90B42',
        borderColor: props.color || '#D90B42'
    }

    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">{props.children}</div>
        </div>
    );
};