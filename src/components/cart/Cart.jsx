import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

//Material-UI
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {addQuantityAction} from "../../store/actions-reducers";
import useDeleteComicStoryToCart from "../../hooks/useDeleteComicStoryToCart";
import Utils from "../../utils/Ultils";

import './Cart.css';

export default props => {
    const {deleteComicToCart} = useDeleteComicStoryToCart();
    const comics = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const {formatMoney, sumValuesCart} = Utils();

    const addQuantity = (event, id) => {
        dispatch(addQuantityAction(id, event.target.value,))
    }

    return (
        <>
            {(comics.length === 0) ?
                <div className="empty_cart">
                    <h2>Seu carrinho de compra está vazio</h2>
                    <Button variant="contained">
                        <Link to="/">Cliqui para ir para vitrine da loja</Link>
                    </Button>
                </div>
                :
                <div>
                    <h2>Carrinho de compra</h2>
                </div>
            }

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
                        <TextField
                            id="outlined-number"
                            label="Quantidade"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={!comic.quantity ? comic.quantity = 1 : comic.quantity}
                            inputProps={{min: "0", max: "10", step: "1"}}
                            variant="outlined"
                            onChange={(event) => addQuantity(event, comic.id)}
                            size="small"
                        />
                    </div>
                    <div className="cart__box-price">
                        <span>
                            {formatMoney(comic.quantity * comic.prices[0].price)}
                          </span>
                    </div>
                    <div className="cart__box-delete">
                        <IconButton
                            onClick={() => deleteComicToCart(index)}
                        >
                            <DeleteIcon/>
                        </IconButton>
                    </div>
                </div>
            )}

            { comics.length > 0
                ?
                <div className="cart__total">
                    <p className="cart__total--text">Total a pagar</p>
                    <h2 className="cart__total--value">{formatMoney(sumValuesCart(comics))}</h2>
                    <button type="button" className="cart__total--button">Finalizar compra</button>
                </div>
                : ''
            }

        </>
    );
}