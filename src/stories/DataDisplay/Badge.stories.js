import React from 'react';
import { storiesOf } from '@storybook/react';

import {muiTheme} from 'storybook-addon-material-ui';
import { theme } from '../theme'

import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function SimpleBadge() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Badge badgeContent={4} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={4} color="secondary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={4} color="error">
        <MailIcon />
      </Badge>
    </div>
  );
}


storiesOf('DataDisplay', module)
  .addDecorator(muiTheme([theme]))
  .add('Badge', () => (
    <div>
      <div style={{ margin: theme.spacing(1)}}>
        <SimpleBadge />
      </div>
    </div>
  ))