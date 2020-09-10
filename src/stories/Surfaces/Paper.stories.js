import React from 'react';
import { storiesOf } from '@storybook/react';

import {muiTheme} from 'storybook-addon-material-ui';
import { theme } from '../theme'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper variant="outlined" />
      <Paper />
      <Paper elevation={3} />
    </div>
  );
}


storiesOf('Surfaces', module)
  .addDecorator(muiTheme([theme]))
  .add('Paper', () => (
    <div>
      <div style={{ margin: theme.spacing(1)}}>
        <SimplePaper />
      </div>
    </div>
  ))