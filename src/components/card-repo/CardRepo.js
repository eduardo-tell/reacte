import React from "react";

function CardRepo({title}) {
    return (
        <div className="md:w-12">
            <div className="bg-white">
                <h4>{ title }</h4>
            </div>
        </div>
    )
}

export default CardRepo;