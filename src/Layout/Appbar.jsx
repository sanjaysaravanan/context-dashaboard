import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Avatar, Badge, Divider, IconButton, Typography, useTheme } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

const CustomAppBar = () => {
  const theme = useTheme();
  return (
    <AppBar
      sx={{
        backgroundColor: '#fff',
        display: 'inline-block',
        width: 'calc(100% - 224px)',
        position: 'absolute',
        top: '0px'
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'end'
        }}
      >
        <IconButton
          size="large"
          aria-label="show 4 new mails"
          color="primary"
          sx={{
            m: 1
          }}
        >
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="primary"
          sx={{
            m: 1
          }}
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Divider orientation="vertical" sx={{ color: '#000', m: 1 }} flexItem />
        <IconButton sx={{ m: 1, p: 0 }}>
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default CustomAppBar;