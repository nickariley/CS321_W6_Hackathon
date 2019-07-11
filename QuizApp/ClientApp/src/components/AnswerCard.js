import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { Markdown } from 'react-markdown-tree';

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

  //const content = "* test\n* test\n* test\n\n```csharp\nvar i = 10;\n```";

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={`${classes.card} ${ selected ? classes.selected : ''}`} onClick={() => onSelected(answer)}>
        <CardContent className={classes.cardContent}>
          <Markdown>{answer.content}</Markdown>
        </CardContent>
      </Card>
    </Grid>
  );
};
