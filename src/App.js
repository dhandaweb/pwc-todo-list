import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Grid container direction="row-reverse" justify="space-evenly" >
        <Main/>
      </Grid>
      <Footer></Footer>
    </div>
  );
}

export default App;
