import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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
  selected: {
    borderColor: theme.palette.primary.main,
    borderWidth: 5,
    borderStyle: 'solid'
  },
}));

export default ({ answer, selected, onSelected }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={`${classes.card} ${ selected ? classes.selected : ''}`} onClick={() => onSelected(answer)}>
        <CardContent className={classes.cardContent}>
          <Typography>{answer.content}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
