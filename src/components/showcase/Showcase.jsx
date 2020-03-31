import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";

//Material-UI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";
import {makeStyles} from "@material-ui/core/styles";

import * as _action from "../../store/actions-reducers";
import Card from "../card/Card";
import Progress from "../progress/Progress";
import {getAllComics} from '../../services/ApiService';
import '../progress/Progress.css';

const useStyles = makeStyles(theme => ({
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
    const classes = useStyles();
    const [comics, setComics] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        setLoading(true)
        /**
         * Faz a requisição para a API da MARVEL e Trás as 20 primeira historia
         */
        getAllComics().then(response => {
            const data = response.data.data.results.filter(res => res.images.length > 0); // Remove os comocs que não tem imagem
            setComics(data); // atualiza o state da desse component
            setLoading(false);
            dispatch(_action.saveSearchResult(data)); // salva o resultado no reducer
        });
    }, []);

    return (
        <>
            {isLoading
                ?
                <Progress/>
                :
                <Typography component="div" style={{backgroundColor: '#fff'}}>
                    <div className={classes.root}>
                        <Grid container spacing={3}>
                            {comics.map(char =>
                                <Fade in={!isLoading} key={char.id}>
                                    <Grid item xs={12} md={3}>
                                        {/*Component do cartão da vitrine*/}
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