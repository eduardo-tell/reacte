import React from "react";
import { useDispatch } from "react-redux";
import { toggleFavorite } from '../../features/favorites/favorites';
import { ContentBody, CardProductImage, CardProductContent, CardProductActions } from './styles.tsx';

export default function CardProduct({props}) {
    const dispatch = useDispatch();
    return (
        <ContentBody className="bg-white overflow-hidden shadow rounded-lg">
            <CardProductImage className="CardProductStyle__image">
                <picture>
                    <img src={props.thumbnail} alt="Imagem do produto" />
                </picture>
            </CardProductImage>
            <CardProductContent className="px-5 py-2">
                <h4><b>{ props.title }</b></h4>
                <p className="text-blue-400"><b> ${ props.price } </b></p>
            </CardProductContent>
            <CardProductActions className="px-5 text-center">
                <button type="button" className={`p-2 bg-blue-400 uppercase rounded-lg text-white`} onClick={() => dispatch(toggleFavorite(props))}> <b> comprar </b> </button>                
            </CardProductActions>
        </ContentBody>
    )
}