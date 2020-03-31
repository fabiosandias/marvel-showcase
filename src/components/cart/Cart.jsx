import React from "react";

import './Cart.css';
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import TextField from '@material-ui/core/TextField';

import useDeleteComicStoryToCart from "../../hooks/useDeleteComicStoryToCart";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Card from "@material-ui/core/Card";

export default props => {
const { deleteComicToCart } = useDeleteComicStoryToCart();
const comics = useSelector(state => state.cart);

    return (
        <>
            {comics.map((comic, index) =>
                <div className="cart" key={comic.id}>
                    <div className="cart__box-image">
                        <img
                            src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                            alt={comic.title}
                            className="cart__image"
                        />
                    </div>
                    <div className="cart__box-title">
                        <Link to={`/product-detail/${comic.id}`} className="card__link"><h3>{comic.title}</h3></Link>
                    </div>
                    <div className="cart__box-quantity">
                        {/*<span><input className="cart__box-quantity--input" type="number" value={0}/></span>*/}
                        <TextField
                            id="outlined-number"
                            label="Number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"

                            size="small"
                        />
                    </div>
                    <div className="cart__box-price">
                        <span>R$ {comic.prices[0].price}</span>
                    </div>
                    <div className="cart__box-delete">
                        <IconButton
                            onClick={() => deleteComicToCart(1)}
                        >
                            <DeleteIcon/>
                        </IconButton>
                    </div>
                </div>
            )}
        </>
    );
}