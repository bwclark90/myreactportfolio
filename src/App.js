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

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <SportsEsportsIcon />
          
          <Typography variant="h5">
            My React Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
      
      
      <Typography variant="h2"> My Name is Brandon </Typography>
       
    </>
  );
}

export default App;
