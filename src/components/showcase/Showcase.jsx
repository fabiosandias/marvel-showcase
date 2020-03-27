import React, {useEffect, useState} from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "../card/Card";
import md5 from "js-md5";
import {API} from "../../constants/constants";
import axios from "axios";
import {makeStyles} from "@material-ui/core/styles";
import Progress from "../progress/Progress";

import './Progress.css';
import Grow from "@material-ui/core/Grow";

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
    const [characters, setCharacters] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const timestamp = Number(new Date())
    const apiHash = md5.create();
    apiHash.update(`${timestamp}${API.PRIVATE_KEY}${API.PUBLIC_KEY}`);

    useEffect(() => {
        setLoading(true)
        axios.get(`${API.URL}${API.METHOD.COMICS}?ts=${timestamp}&apikey=${API.PUBLIC_KEY}&hash=${apiHash.hex()}`)
            .then(response => {
                setCharacters(response.data.data.results);
                setLoading(false);
            });
    }, []);

    return (
        <>
            {isLoading
                ? <div className="progress-bar">
                    <Progress></Progress>
                </div>
                : <Typography component="div" style={{backgroundColor: '#fff'}}>
                    <div className={classes.root}>
                        <Grid container spacing={3}>
                            {characters.map(char =>
                                <Grow in={!isLoading} key={char.id}>
                                    <Grid item xs={12} md={3}>
                                        <Card comic={char}></Card>
                                    </Grid>
                                </Grow>
                            )}
                        </Grid>
                    </div>
                </Typography>
            }
        </>
    );
}