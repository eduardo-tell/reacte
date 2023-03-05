import React from "react";

function CardRepo({id, title}) {
    return (
        <div key={ id }>
            <h4>{ title }</h4>
        </div>
    )
}

export default CardRepo;