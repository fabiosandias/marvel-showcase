import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addToCartAction } from "../store/actions-reducers";

const useAddComicStoryToCart = (comic) => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const [verify, setVerify] = useState(false);
    const [history, setHistory] = useState(comic);
    debugger;
    useEffect(() => {

        if (cart.length === 0) {
            dispatch(addToCartAction(history));
            setVerify(true)
        } else {
            const historyAlreadyCart = cart.filter(ct => ct.id = comic.id)
            if (historyAlreadyCart.length === 0) {
                dispatch(addToCartAction(history));
                setVerify(true)
            } else setVerify(false);
        }
    }, [history]);

    return verify;
}

export default useAddComicStoryToCart;