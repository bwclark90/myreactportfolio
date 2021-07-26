import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CodeQuiz from './codequiz.png'
import Gyeezy from './gyeezy.jpg'
import StudyBlog from './studyblog.png'
import Code from '@material-ui/icons/Code';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Gyeezy}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Gyeezy Game Search
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Allows users to search through information on any of their favorite video games. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = 'https://github.com/bwclark90/G-Yeezy-project';
          }}>
          GitHub Repo
        </Button>
        
      </CardActions>
    </Card>

  );
}


















