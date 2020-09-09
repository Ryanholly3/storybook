import React from 'react';
import { storiesOf } from '@storybook/react';

import {muiTheme} from 'storybook-addon-material-ui';

import { FormControlLabel, FormControl, FormLabel, RadioGroup, Radio } from '@material-ui/core';
import { theme } from '../theme'


storiesOf('Input', module)
  .addDecorator(muiTheme([theme]))
  .add('Radio', () => (
    <div>
      <div style={{ margin: theme.spacing(1)}}>
        <FormControl component="fieldset">
          <FormLabel>Options</FormLabel>
          <RadioGroup aria-label="options" name="options" >
            <FormControlLabel value="1" control={<Radio />} label="Option 1" />
            <FormControlLabel value="2" control={<Radio color="primary" />} label="Option 2" />
            <FormControlLabel value="3" control={<Radio color="secondary" />} label="Option 3" />
            <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  ))