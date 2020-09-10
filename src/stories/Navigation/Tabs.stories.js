import React from 'react';
import { storiesOf } from '@storybook/react';

import {muiTheme} from 'storybook-addon-material-ui';

import { AppBar, Tab, Tabs } from '@material-ui/core';
import { theme } from '../theme'

function SimpleTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static" color={props.color}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </AppBar>
    </div>
  );
}

storiesOf('Navigation', module)
  .addDecorator(muiTheme([theme]))
  .add('Tabs', () => (
    <div>
      <div style={{ margin: theme.spacing(1)}}>
        <SimpleTabs color="default" />
      </div>
      <div style={{ margin: theme.spacing(1)}}>
        <SimpleTabs color="primary" />
      </div>
      <div style={{ margin: theme.spacing(1)}}>
        <SimpleTabs color="secondary" />
      </div>
    </div>
  ))