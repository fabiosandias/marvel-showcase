import React, {useState, useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import './App.css';
import Header from "./components/header/Header";
import RouterComponent from './components/routers/RouterComponent';
import Typography from "@material-ui/core/Typography";

function App() {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="md">
                <Header/>
            </Container>
            <Container maxWidth="md" className="container-showcase">
                <Typography component="div" style={{backgroundColor: '#fafafa'}}>
                    <RouterComponent/>
                </Typography>
            </Container>
        </React.Fragment>
    );
}

export default App;
