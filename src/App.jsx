import React, {useState, useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import './App.css';
import Header from "./components/header/Header";
import RouterComponent from './components/routers/RouterComponent';
import Typography from "@material-ui/core/Typography";
import {BrowserRouter} from "react-router-dom";

import {createBrowserHistory} from "history";

const customHistory = createBrowserHistory();
const App = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <CssBaseline/>
                <Container maxWidth="md">
                    <Header/>
                </Container>
                <Container maxWidth="md" className="container-showcase">
                    <Typography component="div" style={{backgroundColor: '#fafafa'}}>
                        <RouterComponent/>
                    </Typography>
                </Container>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
