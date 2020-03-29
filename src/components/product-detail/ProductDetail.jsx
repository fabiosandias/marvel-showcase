import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {useParams} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import {getAllComicsById, getAllComics} from '../../services/ApiService';
import Progress from "../progress/Progress";

import {useDispatch, useSelector} from "react-redux";

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
}));

export default props => {
    const {comicId} = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [comic, setComic] = useState([]);

    const searchResult = useSelector(state => state.searchResult)

    useEffect(() => {
        setIsLoading(true);
        getAllComicsById(comicId)
            .then(response => {
                setIsLoading(false);
                setComic(response.data.results);
            });
    }, [comicId]);

    const classes = useStyles();

    return (
        <>
            {!isLoading && comic
                ? <Grid container spacing={0}>
                    <Grid item xs={12}>
                        {comic.map(c =>
                            <div className="product-detail">
                                <div className="product-detail__image">
                                    <img className="product-detail__image--img"
                                         src={`${c.thumbnail.path}.${c.thumbnail.extension}`} alt=""/>
                                </div>
                                <div className="product-detail__description">
                                    <h2>{c.title}</h2>
                                </div>
                            </div>
                        )}
                    </Grid>
                </Grid>
                :
                <Progress></Progress>
            }

            {(!isLoading && searchResult.length > 0)
                ?
                <Typography component="div" style={{backgroundColor: '#fff'}}>
                    <div className={classes.root}>
                        <h2>Veja outras histórias</h2>
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