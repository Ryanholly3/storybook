import React from 'react';
import { storiesOf } from '@storybook/react';

import {muiTheme} from 'storybook-addon-material-ui';

import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { theme } from '../theme'


storiesOf('Input', module)
  .addDecorator(muiTheme([theme]))
  .add('FloatingActionButton', () => (
    <div>
      <div style={{ margin: theme.spacing(1)}}>
        <Fab aria-label="add" style={{ margin: "inherit" }}>
          <AddIcon />
        </Fab>
        <Fab color="primary" style={{ margin: "inherit" }}>
          <AddIcon />
        </Fab>
        <Fab color="secondary" style={{ margin: "inherit" }}>
          <AddIcon />
        </Fab>
        <Fab disabled style={{ margin: "inherit" }}>
          <AddIcon />
        </Fab>
      </div>
    </div>
  ))