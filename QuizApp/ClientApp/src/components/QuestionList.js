import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Questions';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import QuestionIcon from '@material-ui/icons/Help';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import InfoIcon from '@material-ui/icons/Info';
import { amber, green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  button: {
    '&:focus': {
      outline: 0,
    },
  },
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  warning: {
    backgroundColor: amber[700],
  },  
}));

const QuestionList = ({ questions, requestQuestions }) => {
  const classes = useStyles();
  const [snackbarOpen, setSnackbarOpen] = useState(true);
  useEffect(() => {
    fetchQuestions();
  }, []);

  function fetchQuestions() {
    return requestQuestions();
  }

  function handleClose() {
    setSnackbarOpen(false);
  }

  return (
    <Container justify="center" maxWidth="md">
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <SnackbarContent
          className={classes.warning}
          aria-describedby="client-snackbar"
          message={
            <span id="client-snackbar" className={classes.message}>
              <InfoIcon />
              {questions.error}
            </span>
          }
        />
      </Snackbar>
      <Grid item xs={12} md={12}>
        <Typography variant="h6" className={classes.title}>
          Questions
        </Typography>
        <div className={classes.demo}>
          <List dense={false}>
            {questions.questions.map((q, i) => (
              <ListItem key={i}>
                <ListItemIcon>
                  <QuestionIcon />
                </ListItemIcon>
                <ListItemText
                  primary={q.prompt}
                  secondary={'C#, ASP.NET Core'}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="Delete"
                    className={classes.button}
                    component={Link}
                    to={`/edit-question/${q.id}`}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="Delete"
                    className={classes.button}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </div>
      </Grid>
    </Container>
  );
};

export default connect(
  (state) => state,
  (dispatch) => bindActionCreators(actionCreators, dispatch)
)(QuestionList);
