import React from "react";
import { useDispatch } from "react-redux";
import { toggleFavorite } from '../../features/favorites/favorites';
import './styles.scss';

export default function CardProduct({props}) {
    const dispatch = useDispatch();
    return (
        <div className="p-5 bg-slate-200 dark:bg-slate-800 dark:text-white rounded-md shadow">
            <h4>{ props.title }</h4>
            <p>{ props.description }</p>
            <p>{ props.price }</p>
            <button type="button" className={`p-2 bg-sky-400 rounded-lg text-white`} onClick={() => dispatch(toggleFavorite(props))}> Favoritar </button>
        </div>
    )
}