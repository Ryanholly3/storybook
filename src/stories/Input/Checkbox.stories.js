import React from 'react';
import { storiesOf } from '@storybook/react';

import {muiTheme} from 'storybook-addon-material-ui';

import { Checkbox } from '@material-ui/core';
import { theme } from '../theme'


storiesOf('Input', module)
  .addDecorator(muiTheme([theme]))
  .add('Checkbox', () => (
    <div>
      <div style={{ margin: theme.spacing(1)}}>
        <Checkbox defaultChecked color='primary' />
        <Checkbox defaultChecked color='secondary'/>
        <Checkbox indeterminate defaultChecked color='secondary'/>
        <Checkbox defaultChecked disabled />
        <Checkbox disabled />
      </div>
    </div>
  ))