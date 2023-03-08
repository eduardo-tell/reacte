import React from "react";

function CardRepo({title}) {
    return (
        <div className="p-5 bg-slate-200 rounded-md shadow">
            <h4>{ title }</h4>
        </div>
    )
}

export default CardRepo;