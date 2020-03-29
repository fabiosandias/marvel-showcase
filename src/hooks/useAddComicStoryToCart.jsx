import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addToCartAction } from "../store/actions-reducers";

const useAddComicStoryToCart = (comic) => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);


    const checkOnCart = comic => {
        debugger;
        if (cart.length === 0) {
            dispatch(addToCartAction(comic));
            return true
        } else {
            const historyAlreadyCart = cart.filter(ct => ct.id === comic.id)
            if (historyAlreadyCart.length === 0) {
                dispatch(addToCartAction(comic));
                return true
            }
            return false;
        }
    };

    return { checkOnCart };
}

export default useAddComicStoryToCart;