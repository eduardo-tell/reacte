import React, { useContext, useState } from "react";
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
        <div className="p-1 relative">
            <button onClick={toggleFavorites}> {favorites.length} Favoritos </button>

            <div className={`list-favorites list-favorites--${styleListFavorites === true ? "open" : "close"} relative`}>
                <div className="list-favorites__items">
                    {favorites.map(favorite => {
                        return (
                            <CardRepo key={favorite.id} title={favorite.name} id={favorite.id} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

