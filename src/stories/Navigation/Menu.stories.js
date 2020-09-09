import React from 'react';
import { storiesOf } from '@storybook/react';

import {muiTheme} from 'storybook-addon-material-ui';

import { Fab } from '@material-ui/core';
import { theme } from '../theme'


storiesOf('Navigation', module)
  .addDecorator(muiTheme([theme]))
  .add('Menu', () => (
    <div>
      <div style={{ margin: theme.spacing(1)}}>

      </div>
    </div>
  ))