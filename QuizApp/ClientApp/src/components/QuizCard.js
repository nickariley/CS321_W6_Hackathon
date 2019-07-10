import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  heading: {
    marginTop: '15%'
  },

  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepPurple[500],
    height: 60,
    width: 60
  },
}));

export default ({
  heading = 'A Heading',
  content = 'This is a media card. You can use this section to describe the content.',
}) => {
  const classes = useStyles();
  const Badge = () => <Avatar className={classes.purpleAvatar}>C#</Avatar>;
  // const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        {/* <CardMedia
          component={Badge}
          className={classes.cardMedia}
          image="https://source.unsplash.com/random"
          title="Image title"
        /> */}
        <CardContent className={classes.cardContent}>
          <Grid container spacing={4}>
            <Grid item xs={4} sm={4} md={4}>
              <Badge /> 
            </Grid>
            <Grid item xs={8} sm={8} md={8}>
              <Typography className={classes.heading} gutterBottom variant="h5" component="h2">{heading}</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={12}>
              <Typography>{content}</Typography>
            </Grid>
          </Grid>

          {/* <Badge /> 
          <Typography gutterBottom variant="h5" component="h2">{heading}</Typography>
          <Typography>{content}</Typography> */}

        </CardContent>
      </Card>
    </Grid>
  );
};
