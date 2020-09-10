import React from 'react';
import { storiesOf } from '@storybook/react';

import {muiTheme} from 'storybook-addon-material-ui';

import { Link, Typography } from '@material-ui/core';
import { theme } from '../theme'

function LinksComponent() {
  const preventDefault = (event) => event.preventDefault();

  return (
    <Typography>
      <Link href="#" onClick={preventDefault} style={{ margin: theme.spacing(1)}}>
        Link
      </Link>
      <Link href="#" onClick={preventDefault} color="inherit" style={{ margin: theme.spacing(1)}}>
        {'color="inherit"'}
      </Link>
      <Link href="#" onClick={preventDefault} variant="body2" style={{ margin: theme.spacing(1)}}>
        {'variant="body2"'}
      </Link>
    </Typography>
  );
}


storiesOf('Navigation', module)
  .addDecorator(muiTheme([theme]))
  .add('Link', () => (
    <div>
      <div style={{ margin: theme.spacing(1)}}>
        <LinksComponent />
      </div>
    </div>
  ))