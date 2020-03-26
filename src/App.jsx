import React, {useState, useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import md5 from 'js-md5';
import './App.css';

import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import {API } from "./constants/constants";
import axios from 'axios';

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

const options = {
    headers: {
        'Origin': 'http://localhost',
        'accept': 'application/json',
        'Content-Type': 'application/json'
    }
}



function App() {
    const classes = useStyles();
    const [characters, setCharacters] = useState([]);

    const timestamp = Number(new Date())
    const apiHash = md5.create();
    apiHash.update(`${timestamp}${API.PRIVATE_KEY}${API.PUBLIC_KEY}`);

    useEffect( () => {
        axios.get(`${API.URL}${API.METHOD.COMICS}?ts=${timestamp}&apikey=${API.PUBLIC_KEY}&hash=${apiHash.hex()}`)
            .then(response => setCharacters(response.data.data.results))
    }, []);

    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="md">
                <Header/>
            </Container>
            <Container maxWidth="md">
                <Typography component="div" style={{backgroundColor: '#fff'}}>
                    <div className={classes.root}>
                        <Grid container spacing={3}>
                            {characters.map(char =>
                                <Grid key={char.id} item xs={12} md={3}>
                                    <Card character={char}></Card>
                                </Grid>
                            )}
                        </Grid>
                    </div>
                </Typography>

            </Container>
        </React.Fragment>
    );
}

export default App;
