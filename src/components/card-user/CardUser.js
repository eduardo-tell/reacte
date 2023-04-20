import React from "react";
import { useDispatch } from "react-redux";
import { toggleFavorite } from '../../features/favorites/favorites';
import './styles.scss';

export default function CardRepo({props}) {
    const dispatch = useDispatch();
    return (
        <div className="p-5 bg-slate-200 dark:bg-slate-800 dark:text-white rounded-md shadow">
            <h4>{ props.name }</h4>
            <p>{ props.email }</p>
            <button type="button" className={`p-2 bg-sky-400 rounded-lg text-white`} onClick={() => dispatch(toggleFavorite(props))}> Favoritar </button>
        </div>
    )
}