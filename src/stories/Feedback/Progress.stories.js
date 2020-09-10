import React from 'react';
import { storiesOf } from '@storybook/react';

import {muiTheme} from 'storybook-addon-material-ui';

import { CircularProgress, LinearProgress } from '@material-ui/core';
import { theme } from '../theme'


storiesOf('Feedback', module)
  .addDecorator(muiTheme([theme]))
  .add('Progress', () => (
    <div>
      <div style={{ margin: theme.spacing(1)}}>
        <CircularProgress color="default" />
        <CircularProgress />
        <CircularProgress color="secondary" />
      </div>
      <div style={{ margin: theme.spacing(1)}}>
        <CircularProgress variant="static" value={25} />
        <CircularProgress variant="static" value={50} />
        <CircularProgress variant="static" value={75} />
        <CircularProgress variant="static" value={100} />
      </div>
      <div style={{ margin: theme.spacing(1)}}>
        <LinearProgress />
      </div>
      <div style={{ margin: theme.spacing(1)}}>
        <LinearProgress color="secondary" />
      </div>
      <div style={{ margin: theme.spacing(1)}}>
        <LinearProgress variant="determinate"  value={50} />
      </div>
    </div>
  ))