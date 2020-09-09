import React from 'react';
import { storiesOf } from '@storybook/react';

import {muiTheme} from 'storybook-addon-material-ui';

import { Slider } from '@material-ui/core';
import { theme } from '../theme'


storiesOf('Input', module)
  .addDecorator(muiTheme([theme]))
  .add('Slider', () => (
    <div>
      <div style={{ width: "20%", margin: theme.spacing(1)}}>
        <Slider />
        <Slider color="secondary"/>
        <Slider disabled />
      </div>
      <div style={{ width: "20%", margin: theme.spacing(1)}}>
        <Slider step={10}
          marks
          min={10}
          max={110} 
        />
        <Slider step={10}
          marks
          min={10}
          max={110}
          color="secondary"
        />
        <Slider step={10}
          marks
          min={10}
          max={110} 
          disabled
        />
      </div>
    </div>
  ))