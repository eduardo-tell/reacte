import { useState } from "react";
import CardUser from "../card-user/CardUser";
import { useSelector } from "react-redux";
import './styles.scss';

export default function Favorites() {
  const favorites = useSelector(state => state.favorites)
  const [ styleListFavorites, setstyleListFavorites ] = useState(false)

  function toggleFavorites() {
    setstyleListFavorites(!styleListFavorites)
  }

  return (
    <div className="p-1 relative">
      <button className="p-2 bg-sky-400 rounded-lg text-white" onClick={toggleFavorites}> {favorites.favorites.length} Favoritos </button>

      <div className={`list-favorites list-favorites--${styleListFavorites === true ? "open" : "close"} relative`}>
        <div className="list-favorites__items p-2 bg-white grid gap-2 rounded-md shadow-sm">
          {favorites.favorites?.map(favorite => {
            return (
              <CardUser key={favorite.id} props={favorite} />
            )
          })}
        </div>
      </div>
    </div>
  )
}
