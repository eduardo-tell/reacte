import React from "react";
import { useDispatch } from "react-redux";
import { toggleFavorite } from '../../features/favorites/favorites';
import { toggleCartProduct } from '../../features/cart/cart';
import { ContentBody, CardProductImage, CardProductContent, CardProductActions } from './styles.tsx';

export default function CardProduct({props}) {
    const dispatch = useDispatch();
    return (
        <ContentBody className="bg-white overflow-hidden">
            <CardProductImage className="CardProductStyle__image">
                <picture>
                    <img src={props.thumbnail} alt="Imagem do produto" />
                </picture>
            </CardProductImage>
            <CardProductContent className="px-5">
                <h4><b>{ props.title }</b></h4>
                <p><b> R${ props.price } </b></p>
            </CardProductContent>
            <CardProductActions className="flex">
                <button className={`flex-auto p-2 bg-green uppercase text-white border border-white bg-green-600 focus:bg-green-500 hover:bg-green-500`} onClick={() => dispatch(toggleFavorite(props))}> <b> favoritar </b> </button>
                <button className={`flex-auto p-2 bg-green uppercase text-white border border-white bg-green-600 focus:bg-green-500 hover:bg-green-500`} onClick={() => dispatch(toggleCartProduct(props))}> <b> carrinho </b> </button>
                <button className={`flex-auto p-2 bg-green uppercase text-white border border-white bg-green-600 focus:bg-green-500 hover:bg-green-500`} onClick={() => dispatch(toggleFavorite(props))}> <b> comprar agora </b> </button>
            </CardProductActions>
        </ContentBody>
    )
}
