import React from 'react';
import { storiesOf } from '@storybook/react';

import {muiTheme} from 'storybook-addon-material-ui';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { theme } from '../theme'




storiesOf('Input', module)
  .addDecorator(muiTheme([theme]))
  .add('DateTime', () => (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div style={{ margin: theme.spacing(1)}}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          style={{margin: "inherit"}}
        />
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          style={{margin: "inherit"}}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
          style={{margin: "inherit"}}
        />
      </div>
    </MuiPickersUtilsProvider>
  ))