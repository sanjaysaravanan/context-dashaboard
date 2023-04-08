// This will contain sidebar, appbar, background - Done

import React from 'react';

import { Box, useTheme } from '@mui/material';
import Sidebar from './Sidebar';
import CustomAppBar from './Appbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  // mui theme
  const theme = useTheme();

  return (
    <Box
      height="100%"
      bgcolor={'#f8f9fc'}
      minHeight={"100vh"}
    >
      <Sidebar />
      <CustomAppBar />
      <Box
        marginLeft={'224px'}
        padding="16px"
        position={'absolute'}
        top="60px"
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;