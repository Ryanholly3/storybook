import React from 'react';
import { storiesOf } from '@storybook/react';

import {muiTheme} from 'storybook-addon-material-ui';

import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@material-ui/core';
import { theme } from '../theme'


storiesOf('Input', module)
  .addDecorator(muiTheme([theme]))
  .add('Select', () => (
    <div>
      <div style={{ margin: theme.spacing(1)}}>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div style={{ margin: theme.spacing(1)}}>
        <FormControl >
          <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Some important helper text</FormHelperText>
        </FormControl>
      </div>
      <div style={{ margin: theme.spacing(1)}}>
        <FormControl >
          <Select
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Without label</FormHelperText>
        </FormControl>
      </div>
      <div style={{ margin: theme.spacing(1)}}>
        <FormControl >
          <InputLabel shrink id="demo-simple-select-placeholder-label-label">
            Age
          </InputLabel>
          <Select
            labelId="demo-simple-select-placeholder-label-label"
            id="demo-simple-select-placeholder-label"
            displayEmpty
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Label + placeholder</FormHelperText>
        </FormControl>
      </div>
      <div style={{ margin: theme.spacing(1)}}>
        <FormControl  disabled>
          <InputLabel id="demo-simple-select-disabled-label">Name</InputLabel>
          <Select
            labelId="demo-simple-select-disabled-label"
            id="demo-simple-select-disabled"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Disabled</FormHelperText>
        </FormControl>
      </div>
      <div style={{ margin: theme.spacing(1)}}>
        <FormControl  error>
          <InputLabel id="demo-simple-select-error-label">Name</InputLabel>
          <Select
            labelId="demo-simple-select-error-label"
            id="demo-simple-select-error"
            renderValue={(value) => `⚠️  - ${value}`}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Error</FormHelperText>
        </FormControl>
      </div>
      <div style={{ margin: theme.spacing(1)}}>
        <FormControl >
          <InputLabel id="demo-simple-select-readonly-label">Name</InputLabel>
          <Select
            labelId="demo-simple-select-readonly-label"
            id="demo-simple-select-readonly"
            inputProps={{ readOnly: true }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Read only</FormHelperText>
        </FormControl>
      </div>
      <div style={{ margin: theme.spacing(1)}}>
        <FormControl >
          <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            autoWidth
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Auto width</FormHelperText>
        </FormControl>
      </div>
      <div style={{ margin: theme.spacing(1)}}>
        <FormControl >
          <Select
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="" disabled>
              Placeholder
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Placeholder</FormHelperText>
        </FormControl>
      </div>
      <div style={{ margin: theme.spacing(1)}}>
        <FormControl required >
          <InputLabel id="demo-simple-select-required-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>
      </div>
      <div style={{ margin: theme.spacing(1)}}>
        <FormControl variant="outlined" >
          <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div style={{ margin: theme.spacing(1)}}>
        <FormControl variant="filled" >
          <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  ))