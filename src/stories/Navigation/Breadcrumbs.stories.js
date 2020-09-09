import React from 'react';
import { storiesOf } from '@storybook/react';

import {muiTheme} from 'storybook-addon-material-ui';

import { Breadcrumbs, Link, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import { theme } from '../theme'


storiesOf('Navigation', module)
  .addDecorator(muiTheme([theme]))
  .add('Breadcrumbs', () => (
    <div>
      <div style={{ margin: theme.spacing(1)}}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            Material-UI
          </Link>
          <Link color="inherit" href="/">
            Core
          </Link>
          <Typography color="textPrimary">Breadcrumb</Typography>
        </Breadcrumbs>
      </div>
      <div style={{ margin: theme.spacing(1)}}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/" style={{ display: "flex", alignItems: "center" }}>
            <HomeIcon style={{marginRight: theme.spacing(0.5), width: 20, height: 20}} />
            Material-UI
          </Link>
          <Link color="inherit" href="/" style={{ display: "flex", alignItems: "center" }}>
            <WhatshotIcon style={{marginRight: theme.spacing(0.5), width: 20, height: 20}} />
            Core
          </Link>
          <Typography color="textPrimary" style={{ display: "flex", alignItems: "center" }}>
            <GrainIcon style={{marginRight: theme.spacing(0.5), width: 20, height: 20}} />
            Breadcrumb
          </Typography>
        </Breadcrumbs>
      </div>
      <div style={{ margin: theme.spacing(1)}}>
        <Breadcrumbs maxItems={2} aria-label="breadcrumb">
          <Link color="inherit" href="/" style={{ display: "flex", alignItems: "center" }}>
            <HomeIcon style={{marginRight: theme.spacing(0.5), width: 20, height: 20}} />
            Material-UI
          </Link>
          <Link color="inherit" href="/" style={{ display: "flex", alignItems: "center" }}>
            <WhatshotIcon style={{marginRight: theme.spacing(0.5), width: 20, height: 20}} />
            Core
          </Link>
          <Typography color="textPrimary" style={{ display: "flex", alignItems: "center" }}>
            <GrainIcon style={{marginRight: theme.spacing(0.5), width: 20, height: 20}} />
            Breadcrumb
          </Typography>
        </Breadcrumbs>
      </div>
    </div>
  ))