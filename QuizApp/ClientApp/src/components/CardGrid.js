import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from './Card';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export default ({ cards = [], component = null }) => {
  const classes = useStyles();
  const CardComponent = component;
  // const classes = useStyles();
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {cards.map((card, index) => {
          return CardComponent ? <CardComponent key={index} /> : <Card key={index} {...card} />;
        })}
      </Grid>
    </Container>
  );
};
