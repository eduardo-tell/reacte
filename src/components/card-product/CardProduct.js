import React from "react";
import { useDispatch } from "react-redux";
import { toggleFavorite } from '../../features/favorites/favorites';
import { CardProductStyle } from './styles.tsx';

export default function CardProduct({props}) {
    const dispatch = useDispatch();
    return (
        <CardProductStyle className="bg-white rounded-md shadow">
            <figure className="CardProductStyle__image"> <img src={props.thumbnail} alt="Imagem do produto" /> </figure>
            <div className="p-5">
                <h4>{ props.title }</h4>
                <p>{ props.description }</p>
                <p>{ props.price }</p>
                <button type="button" className={`p-2 bg-blue-400 rounded-lg text-white`} onClick={() => dispatch(toggleFavorite(props))}> Favoritar </button>                
            </div>
        </CardProductStyle>
    )
}