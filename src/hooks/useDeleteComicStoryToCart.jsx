import React from "react";
import { useDispatch } from "react-redux";
import { deleteToCartAction } from "../store/actions-reducers";
import {TOAST_CONFIG} from "../constants/constants";
import Ultils from "../utils/Ultils";

const useDeleteComicStoryToCart = index => {
    const dispatch = useDispatch()
    const { toast } = Ultils();

    const deleteComicToCart = (index) => {
        dispatch(deleteToCartAction(index))
        toast(TOAST_CONFIG.DELETE);
    }

    return { deleteComicToCart };
}

export default useDeleteComicStoryToCart;