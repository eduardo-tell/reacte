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
            <button className="p-2 bg-sky-400 rounded-lg text-white" onClick={toggleFavorites}> {favorites.length} Favoritos </button>

            <div className={`list-favorites list-favorites--${styleListFavorites === true ? "open" : "close"} relative`}>
                <div className="list-favorites__items p-2 bg-white grid gap-2 rounded-md shadow-sm">
                    {favorites.map(favorite => {
                        return (
                            <CardRepo key={favorite.id} props={favorite} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

