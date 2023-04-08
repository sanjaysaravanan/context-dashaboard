import React from 'react';

import { Box, Typography } from '@mui/material';


const Dashboard = () => {
  return (
    <Box
      height={''}
      width={'calc(100% - 224px)'}
      sx={{
        m: 1
      }}
    >
      <Box>
        <Typography color="primary" >Dashboard</Typography>
      </Box>
    </Box>
  )
}

export default Dashboard;