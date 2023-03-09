import React, { createContext, useEffect, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({children}) => {
    const [favorites, setFavorite] = useState([])

    function toggleFavoriteItem(favorite) {
        const copyItensFavorite = [...favorites]
        var index = copyItensFavorite.indexOf(favorite);

        if (index === -1) {
            copyItensFavorite.push(favorite);
        } else {
            copyItensFavorite.splice(index, 1);
        }

        setFavorite(copyItensFavorite)
    }

    function clearFavorites() {
        setFavorite([]);
    }

    return (
        <FavoritesContext.Provider value={{favorites, toggleFavoriteItem, clearFavorites}}>
            {children}
        </FavoritesContext.Provider>
    )
}
