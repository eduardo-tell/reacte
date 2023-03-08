import React, { createContext, useEffect, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({children}) => {
    const [favorites, setFavorite] = useState([])

    useEffect(() => {
        console.log(favorites);
    }, [favorites])

    function toggleFavoriteItem(id) {
        const copyItensFavorite = [...favorites]
        var index = copyItensFavorite.indexOf(id);

        if (index === -1) {
            copyItensFavorite.push(id);
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
