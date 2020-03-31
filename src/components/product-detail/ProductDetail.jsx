import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {useParams} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import {getAllComicsById, getAllComics} from '../../services/ApiService';
import Progress from "../progress/Progress";
import useAddComicStoryToCart from '../../hooks/useAddComicStoryToCart'

import {useSelector} from "react-redux";

import './Product-detail.css';
import Fade from "@material-ui/core/Fade";
import Card from "../card/Card";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

export default props => {
    const {comicId} = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [comic, setComic] = useState([]);
    const [title, setTitle] = useState('Loja Virtual da Marvel');

    const searchResult = useSelector(state => state.searchResult)
    const {checkOnCart} = useAddComicStoryToCart();

    useEffect(() => {
        setIsLoading(true);

        getAllComicsById(comicId)
            .then(response => {
                setIsLoading(false);
                setComic(response.data.results);
                setTitle(response.data.results.title);

            });

    }, [comicId]);

    const classes = useStyles();

    return (
        <>
            {!isLoading && comic
                ? <Grid container spacing={0}>
                    <Grid item xs={12} md={12}>
                        {comic.map(c =>
                            <div className="product-detail" key={c.id}>
                                <div className="product-detail__image">
                                    <img className="product-detail__image--img"
                                         src={`${c.thumbnail.path}.${c.thumbnail.extension}`} alt=""/>
                                </div>
                                <div className="product-detail__description">
                                    <h2>{c.title}</h2>
                                    <p dangerouslySetInnerHTML={{__html: c.description}}></p>
                                    <Button
                                        variant="contained"
                                        size="medium"
                                        color="primary"
                                        className={classes.margin}
                                        onClick={() => checkOnCart(c)}
                                    >
                                        Adicionar ao carrinho de compras
                                    </Button>
                                </div>
                            </div>
                        )}
                    </Grid>
                </Grid>
                :
                <Progress/>
            }

            {(!isLoading && searchResult.length > 0)
                ?
                <Typography component="div" style={{backgroundColor: '#fff'}}>
                    <div className={classes.root}>
                        <h2>Mais histórias em quadrinho</h2>
                        <Grid container spacing={3}>
                            {searchResult.map(char =>
                                <Fade in={!isLoading} key={char.id}>
                                    <Grid item xs={12} md={3}>
                                        <Card comic={char}></Card>
                                    </Grid>
                                </Fade>
                            )}
                        </Grid>
                    </div>
                </Typography>
                :
                ""
            }
        </>
    );
}