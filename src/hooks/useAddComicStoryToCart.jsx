import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addToCartAction } from "../store/actions-reducers";
import Ultils from '../utils/Ultils'
import { TOAST_CONFIG } from "../constants/constants";

const useAddComicStoryToCart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const { toast } = Ultils();

    const checkOnCart = comic => {
        debugger
        if (cart.length === 0) {
            dispatch(addToCartAction(comic));
            toast(TOAST_CONFIG.SUCCESS);
        } else {
            const historyAlreadyCart = cart.filter(ct => ct.id === comic.id)
            if (historyAlreadyCart.length === 0) {
                dispatch(addToCartAction(comic));
                toast(TOAST_CONFIG.SUCCESS)
                return false;
            }
            toast(TOAST_CONFIG.WARNING)
        }
    };
    return { checkOnCart };
}

export default useAddComicStoryToCart;