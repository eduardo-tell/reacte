import React from "react";
import './card-repo-styles.scss';

function CardRepo({id, title}) {
    return (
        <div className="card">
            <div className="card-body">
                <h4>{ title }</h4>
            </div>
        </div>
    )
}

export default CardRepo;