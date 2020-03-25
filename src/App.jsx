import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './App.css';

import Header  from "./components/Header/Header";


function App() {
  return (
      <React.Fragment>
          <CssBaseline />
          <Container maxWidth="md">
              <Header />
              <Typography component="div" style={{ backgroundColor: '#fff', height: '100vh' }} />
          </Container>
      </React.Fragment>
  );
}

export default App;
