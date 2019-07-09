import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
}));

export default (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <main>
        <Container>{props.children}</Container>
      </main>
      <Footer />
    </React.Fragment>
  );
};
