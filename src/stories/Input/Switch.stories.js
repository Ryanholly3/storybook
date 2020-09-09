import React from 'react';
import { storiesOf } from '@storybook/react';

import {muiTheme} from 'storybook-addon-material-ui';

import { Switch } from '@material-ui/core';
import { theme } from '../theme'


storiesOf('Input', module)
  .addDecorator(muiTheme([theme]))
  .add('Switch', () => (
    <div>
      <div style={{ margin: theme.spacing(1)}}>
        <Switch
          name="checkedA"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        <Switch
          color="primary"
          name="checkedB"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        <Switch
          defaultChecked
          color="default"
          inputProps={{ 'aria-label': 'checkbox with default color' }}
        />
        <Switch disabled inputProps={{ 'aria-label': 'disabled checkbox' }} />
        <Switch disabled checked inputProps={{ 'aria-label': 'primary checkbox' }} />
      </div>
    </div>
  ))