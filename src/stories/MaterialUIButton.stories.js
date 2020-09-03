import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';

import {muiTheme} from 'storybook-addon-material-ui';

import { Button } from '@material-ui/core';
import { theme } from './theme'


storiesOf('Material-UI', module)
  .addDecorator(muiTheme([theme]))
  .add('Button', () => (
      <div>
        <div style={{ margin: theme.spacing(1)}}>
          <Button style={{margin: 'inherit'}}>
            Default
          </Button>
          <Button color='primary' style={{margin: 'inherit'}}>
            Primary
          </Button>
          <Button color='secondary' style={{margin: 'inherit'}}>
            Secondary
          </Button>
          <Button disabled style={{margin: 'inherit'}}>
            Disabled
          </Button>
        </div>
        <div style={{ margin: theme.spacing(1)}}>
          <Button variant='contained' style={{margin: 'inherit'}}>
            Default
          </Button>
          <Button variant='contained' color='primary' style={{margin: 'inherit'}}>
            Primary
          </Button>
          <Button variant='contained' color='secondary' style={{margin: 'inherit'}}>
            Secondary
          </Button>
          <Button variant='contained' disabled style={{margin: 'inherit'}}>
            Disabled
          </Button>
        </div>
        <div style={{ margin: theme.spacing(1)}}>
          <Button variant='outlined' style={{margin: 'inherit'}}>
            Default
          </Button>
          <Button variant='outlined' color='primary' style={{margin: 'inherit'}}>
            Primary
          </Button>
          <Button variant='outlined' color='secondary' style={{margin: 'inherit'}}>
            Secondary
          </Button>
          <Button variant='outlined' disabled style={{margin: 'inherit'}}>
            Disabled
          </Button>
        </div>
      </div>
      ))
  