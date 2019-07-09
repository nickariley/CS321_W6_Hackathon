import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
export default () => {
  const classes = useStyles();
  // const classes = useStyles();
  return (
    <AppBar position="relative">
    <Toolbar>
      {/* <CameraIcon className={classes.icon} /> */}
      <QuestionAnswerIcon className={classes.icon} />
      <Typography
        variant="h6"
        color="inherit"
        noWrap
        className={classes.title}
      >
        ACA Quiz
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
);
};


