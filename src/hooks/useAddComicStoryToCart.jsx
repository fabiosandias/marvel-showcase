import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addToCartAction } from "../store/actions-reducers";

import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';


const useAddComicStoryToCart = (comic) => {
    const [state, setState] = useState({
        open: false,
        Transition: Fade,
    });

    const handleClick = (Transition) => () => {
        setState({
            open: true,
            Transition,
        });
    };

    const handleClose = () => {
        setState({
            ...state,
            open: false,
        });
    };
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    const checkOnCart = comic => {
        if (cart.length === 0) {
            dispatch(addToCartAction(comic));

            return (
                <Snackbar
                    open={state.open}
                    onClose={handleClose}
                    TransitionComponent={state.Transition}
                    message="I love snacks"
                />
            )
        } else {
            const historyAlreadyCart = cart.filter(ct => ct.id === comic.id)
            if (historyAlreadyCart.length === 0) {
                dispatch(addToCartAction(comic));
                return (
                    <Snackbar
                        open={state.open}
                        onClose={handleClose}
                        TransitionComponent={state.Transition}
                        message="I love snacks"
                    />
                )
            }
            return (
                <Snackbar
                    open={state.open}
                    onClose={handleClose}
                    TransitionComponent={state.Transition}
                    message="I love snacks"
                />
            )
        }
    };
    return { checkOnCart };
}

export default useAddComicStoryToCart;