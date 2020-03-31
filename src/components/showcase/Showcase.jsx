import React, {useEffect, useState} from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "../card/Card";
import {makeStyles} from "@material-ui/core/styles";
import Progress from "../progress/Progress";
import {getAllComics} from '../../services/ApiService';

import { useDispatch } from "react-redux";
import * as _action from "../../store/actions-reducers";

import '../progress/Progress.css';
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default props => {
    const classes = useStyles();
    const [comics, setComics] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const dispatch = useDispatch();

    // const { includePrice } = useIncludePriceValue();

    useEffect(() => {
        setLoading(true)
        getAllComics().then(response => {
            const data = response.data.data.results.filter(res => res.images.length > 0);
            setComics(data);
            setLoading(false);
            dispatch(_action.saveSearchResult(data));
        });
    }, []);


    return (
        <>
            {isLoading
                ?
                <Progress />
                :
                <Typography component="div" style={{backgroundColor: '#fff'}}>
                    <div className={classes.root}>
                        <Grid container spacing={3}>
                            {comics.map(char =>
                                <Fade in={!isLoading} key={char.id}>
                                    <Grid item xs={12} md={3}>
                                        <Card comic={char}></Card>
                                    </Grid>
                                </Fade>
                            )}
                        </Grid>
                    </div>
                </Typography>
            }
        </>
    );
}