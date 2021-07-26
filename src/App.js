import React from 'react'
import './App.css';
import { Typography } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import Divider from '@material-ui/core/Divider';
import CodeIcon from '@material-ui/icons/Code';

import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Cards from './components/Cards'
import Card2 from './components/Card2'
import Card3 from './components/Card3'
import Paper from '@material-ui/core/Paper';
import Contact from './components/ContactForm'
import AndroidSharpIcon from '@material-ui/icons/AndroidSharp';






function App() {
  const theme = createMuiTheme({
    palette: {
      type:"dark",
    }
  });
  return (
    <>
    <ThemeProvider theme ={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <SportsEsportsIcon />
          
          <Typography variant="h5">
            My React Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
      <div>
        <Container maxWidth="md">
      <Typography variant="h2" align="center" color="textPrimary"> Hello, I'm Brandon </Typography>
            <Divider dark />
            <br></br>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        I have been learning at UCI Coding Bootcamp and teaching myself how to code! I enjoy solving puzzles and working through problems to create beautiful, user interactive web applications. Enjoy browsing through my portfolio! 
      </Typography>
              <br></br>
              <br></br>
              <br></br>
      <div>
        <Grid container spacing={2} justify="center">
          <Grid item>
                  <Typography variant="h5" align="center" color="textPrimary" paragraph>
                      <b>Recent Technologies <AndroidSharpIcon /></b>
                    </Typography>
                  <Divider dark />
<br />
                  <Button variant="contained">HTML5</Button><Button variant="contained">Bash</Button><Button variant="contained">CSS</Button><Button variant="contained">React</Button><Button variant="contained">Node</Button><Button variant="contained">JavaScript</Button><Button variant="contained">MYSQL</Button>
          </Grid>
        </Grid>
      </div>
          </Container>
        </div>
        <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Typography variant="h5" align="center" color="textPrimary" paragraph>
            <b>Recent Projects <CodeIcon /></b>
          </Typography>
          <Divider dark />
          <br></br>
          <br></br>
          <div>
            <Grid container spacing={24} justify="center">
              <Grid item md={3}>
                <Cards />
              </Grid>
              <Grid item md={3}>
                <Card2 />
              </Grid>
              <Grid item md={3}>
                <Card3 />
              </Grid>
            </Grid>
            
            
            
          </div>
          <br></br>
          <br></br>
          <br></br>
          <Contact  />
          <br></br>
          <br></br>
          <br></br>
          <div>
            <Paper elevation={3}>
              <Grid container spacing={24} justify="center">
                <Grid item md={1}>
                  <button
                    justify="center"
                    type="button"
                    size="large"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = 'https://www.linkedin.com/in/brandon-clark-8a0a11169/';
                    }}
                  > <LinkedInIcon /> </button>
                </Grid>
                <Grid item md={1}>
                  <button
                    justify="center"
                    type="button"
                    size="large"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = 'https://github.com/bwclark90';
                    }}
                  > <GitHubIcon /> </button>
                </Grid>
              </Grid>
            

            </Paper>
          </div>
          

          
      </main>
      </ThemeProvider>
    </>
    
  );
}

export default App;
