import React from 'react';
import { storiesOf } from '@storybook/react';

import {muiTheme} from 'storybook-addon-material-ui';

import { Button, ButtonGroup } from '@material-ui/core';
import { theme } from '../theme'


storiesOf('Input', module)
  .addDecorator(muiTheme([theme]))
  .add('ButtonGroup', () => (
    <div>
      <div style={{ margin: theme.spacing(1)}}>
        <ButtonGroup variant="text" style={{margin: 'inherit'}}>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup variant="text" color="primary" style={{margin: 'inherit'}}>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup variant="text" color="secondary" style={{margin: 'inherit'}}>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup variant="text" color="primary" disabled style={{margin: 'inherit'}}>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div>
      <div style={{ margin: theme.spacing(1)}}>
        <ButtonGroup style={{margin: 'inherit'}}>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup color="primary" style={{margin: 'inherit'}}>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup color="secondary" style={{margin: 'inherit'}}>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup color="primary" disabled style={{margin: 'inherit'}}>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div>
      <div style={{ margin: theme.spacing(1)}}>
        <ButtonGroup variant="contained" style={{margin: 'inherit'}}>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup variant="contained" color="primary" style={{margin: 'inherit'}}>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup variant="contained" color="secondary" style={{margin: 'inherit'}}>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup variant="contained" color="primary" disabled style={{margin: 'inherit'}}>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div>
    </div>
  ))