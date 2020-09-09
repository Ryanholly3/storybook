import React from 'react';
import { storiesOf } from '@storybook/react';

import {muiTheme} from 'storybook-addon-material-ui';

import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FolderIcon from '@material-ui/icons/Folder';
import { theme } from '../theme'


storiesOf('Navigation', module)
  .addDecorator(muiTheme([theme]))
  .add('BottomNavigation', () => (
    <div>
      <div style={{ width: "500px", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "gray", margin: theme.spacing(1)}}>
        <BottomNavigation
          showLabels
          style={{ width: "90% "}}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </div>
      <div style={{ width: "500px", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "gray", margin: theme.spacing(1)}}>
        <BottomNavigation style={{ width: "90% "}} >
          <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
          <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
        </BottomNavigation>
      </div>
    </div>
  ))