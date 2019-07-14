import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators as questionActionCreators } from '../store/Questions';
import { actionCreators as viewNameActionCreators } from '../store/ViewName';
import { actionCreators as showNotificationActionCreators } from '../store/ShowNotification';

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
import { Button } from '@material-ui/core';

import Notification from './Notification';

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
}));

const QuestionList = ({
  questions,
  requestQuestions,
  setViewName,
  showNotification,
  isNotificationOpen,
  deleteQuestion
}) => {
  const classes = useStyles();
  useEffect(() => {
    setViewName('Questions');
    fetchQuestions();
  }, []);

  function fetchQuestions() {
    return requestQuestions();
  }

  function handleCloseNotification() {
    showNotification(false);
  }

  function handleDelete(id) {
    deleteQuestion(id);
    
  }

  return (
    <Container justify="center" maxWidth="md">
      <Notification
        isOpen={isNotificationOpen.isNotificationOpen}
        message={questions.error}
        handleClose={handleCloseNotification}
      />
      <Grid item xs={12} md={12}>
        <Grid container alignItems="center" justify="space-between">
          <Grid item md={10}>
            <Typography variant="h6" className={classes.title}>
              Questions
            </Typography>
          </Grid>
          <Grid item md={2}>
            <Grid
              container
              alignItems="flex-start"
              justify="flex-end"
              direction="row"
            >
              <Button variant="contained" component={Link} to="/edit-question">
                New Question
              </Button>
            </Grid>
          </Grid>
        </Grid>
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
                    onClick={() => handleDelete(q.id)}
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
  (dispatch) =>
    bindActionCreators(
      {
        ...questionActionCreators,
        ...viewNameActionCreators,
        ...showNotificationActionCreators,
      },
      dispatch
    )
)(QuestionList);
