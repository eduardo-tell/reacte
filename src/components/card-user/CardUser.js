import React, { useContext, useEffect, useState } from "react";
import { FavoritesContext } from '../../context/Favorites';
import './styles.scss';

function CardRepo({props}) {   
    const { favorites, toggleFavoriteItem } = useContext(FavoritesContext)
    const [ favorited, toggleFavorited ] = useState(false)

    useEffect(() => {
        toggleFavorited(favorites.includes(props))
    }, [favorites])

    return (
        <div className="p-5 bg-slate-200 dark:bg-slate-800 dark:text-white rounded-md shadow">
            <h4>{ props.name }</h4>
            <p>{ props.email }</p>
            <button type="button" className={`p-2 bg-sky-400 rounded-lg text-white ${favorited && "favorited"}`} onClick={() => toggleFavoriteItem(props)}> Favoritar </button>
        </div>
    )
}

export default CardRepo;