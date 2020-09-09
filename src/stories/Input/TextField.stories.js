import React from 'react';
import { storiesOf } from '@storybook/react';

import {muiTheme} from 'storybook-addon-material-ui';

import { TextField } from '@material-ui/core';
import { theme } from '../theme'


storiesOf('Input', module)
  .addDecorator(muiTheme([theme]))
  .add('TextField', () => (
    <div>
      <div style={{ margin: theme.spacing(1)}}>
        <TextField id="standard-basic" label="Standard" style={{margin: "auto"}} />
      </div>
      <div style={{ margin: theme.spacing(1)}}>
        <TextField id="filled-basic" label="Filled" variant="filled" style={{margin: "auto"}} />
      </div>
      <div style={{ margin: theme.spacing(1)}}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{margin: "auto"}} />
      </div>
      <div style={{ margin: theme.spacing(1)}}>
        <TextField id="standard-basic" size="small" label="Standard" style={{margin: "auto"}} />
      </div>
      <div style={{ margin: theme.spacing(1)}}>
        <TextField id="filled-basic" size="small" label="Filled" variant="filled" style={{margin: "auto"}} />
      </div>
      <div style={{ margin: theme.spacing(1)}}>
        <TextField id="outlined-basic" size="small" label="Outlined" variant="outlined" style={{margin: "auto"}} />
      </div>
    </div>
  ))