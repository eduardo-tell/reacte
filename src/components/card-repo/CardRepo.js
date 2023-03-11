import React, { useContext, useEffect } from "react";
import { FavoritesContext } from '../../context/Favorites';

function CardRepo({props}) {   
    const { toggleFavoriteItem } = useContext(FavoritesContext)

    useEffect(() => {
        console.log("Update");
    }, [props])

    return (
        <button key={props.id} className="p-5 bg-slate-200 rounded-md shadow" onClick={() => toggleFavoriteItem(props)}>
            <h4>{ props.name }</h4>
        </button>
    )
}

export default CardRepo;