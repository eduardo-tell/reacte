import React, { useContext, useEffect, useState } from "react";
import { FavoritesContext } from "../../context/Favorites";
import CardRepo from "../card-repo/CardRepo";
import './styles.scss';

export default function Favorites() {
    const { favorites } = useContext(FavoritesContext)
    const [ styleListFavorites, setstyleListFavorites ] = useState(false)

    function toggleFavorites() {
        setstyleListFavorites(!styleListFavorites)
    }

    return (
        <div className="p-1">
            <button onClick={toggleFavorites}> {favorites.length} Favoritos </button>

            <div className={`list-favorites--${styleListFavorites === true ? "open" : "close"}`}>
                {favorites.map(favorite => {
                    return (
                        <div>
                            <CardRepo key={favorite.id} title={favorite.name} id={favorite.id} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

