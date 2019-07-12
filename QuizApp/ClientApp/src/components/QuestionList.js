import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Questions';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import QuestionIcon from '@material-ui/icons/Help';

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

const QuestionList = ({ questions, requestQuestions }) => {
  const classes = useStyles();

  useEffect(() => {
    console.log('QuestionList mounted');
    fetchQuestions();
  }, []);

  function fetchQuestions() {
    return requestQuestions();
  }

  return (
    <div>
      <Grid item xs={12} md={12}>
        <Typography variant="h6" className={classes.title}>
          Questions
        </Typography>
        <div className={classes.demo}>
          <List dense={false}>
            {questions.map((q) => (
              <ListItem>
                {/* <ListItemAvatar>
                  <Avatar>
                    <QuestionIcon />
                  </Avatar>
                </ListItemAvatar> */}
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
    </div>
  );
};

export default connect(
  (state) => state.questions,
  (dispatch) => bindActionCreators(actionCreators, dispatch)
)(QuestionList);
