import React, {useState, useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import './App.css';
import Header from "./components/header/Header";
import RouterComponent from './components/routers/RouterComponent';
import Typography from "@material-ui/core/Typography";
import {BrowserRouter} from "react-router-dom";
import { SnackbarProvider, useSnackbar } from 'notistack';
import {Toast} from "./components/toast/Toast";

const App = () => {
    return (
        <React.Fragment>
            <SnackbarProvider
                maxSnack={4}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
            >
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
            </SnackbarProvider>

        </React.Fragment>
    );
}

export default App;
