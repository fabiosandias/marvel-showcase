import React, {useEffect, useState} from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "../card/Card";
import md5 from "js-md5";
import {API} from "../../constants/constants";
import axios from "axios";
import {makeStyles} from "@material-ui/core/styles";

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

    const timestamp = Number(new Date())
    const apiHash = md5.create();
    apiHash.update(`${timestamp}${API.PRIVATE_KEY}${API.PUBLIC_KEY}`);

    useEffect( () => {
         axios.get(`${API.URL}${API.METHOD.COMICS}?ts=${timestamp}&apikey=${API.PUBLIC_KEY}&hash=${apiHash.hex()}`)
            .then(response => setCharacters(response.data.data.results));
    }, []);

    return (
        <>
            <Typography component="div" style={{backgroundColor: '#fff'}}>
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        {characters.map(char =>
                            <Grid key={char.id} item xs={12} md={3}>
                                <Card comic={char}></Card>
                            </Grid>
                        )}
                    </Grid>
                </div>
            </Typography>
        </>
    );
}