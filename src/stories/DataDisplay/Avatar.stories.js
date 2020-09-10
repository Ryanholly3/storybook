import React from 'react';
import { storiesOf } from '@storybook/react';

import {muiTheme} from 'storybook-addon-material-ui';
import { theme } from '../theme'

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

function LetterAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar>H</Avatar>
      <Avatar className={classes.orange}>N</Avatar>
      <Avatar className={classes.purple}>OP</Avatar>
    </div>
  );
}


storiesOf('DataDisplay', module)
  .addDecorator(muiTheme([theme]))
  .add('Avatar', () => (
    <div>
      <div style={{ margin: theme.spacing(1)}}>
        <LetterAvatars />
      </div>
    </div>
  ))