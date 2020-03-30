import React from "react";
import { useDispatch } from "react-redux";
import { deleteToCartAction } from "../store/actions-reducers";

const useDeleteComicStoryToCart = index => {
    const dispatch = useDispatch()

    const deleteComicToCart = (index) => {
        dispatch(deleteToCartAction(index))
    }

    return { deleteComicToCart };
}

export default useDeleteComicStoryToCart;