import React from 'react';
import { storiesOf } from '@storybook/react';

import {muiTheme} from 'storybook-addon-material-ui';

import { Fab } from '@material-ui/core';
import { theme } from '../theme'


storiesOf('Surfaces', module)
  .addDecorator(muiTheme([theme]))
  .add('Paper', () => (
    <div>
      <div style={{ margin: theme.spacing(1)}}>

      </div>
    </div>
  ))