import React from 'react';

import { Button, Typography } from '@mui/material';

import ThemeContext from './ThemeContext';

const ChildTwo = () => {
  const themeValue = React.useContext(ThemeContext);
  return (
    <>
      <Typography variant="h2" sx={{
        color: themeValue.value.color
      }} >{themeValue.value.mode}</Typography>
      <Button variant='contained' onClick={() => themeValue.setThemeValue({ mode: 'light', color: 'blue' })} >Change To Light</Button>
    </>
  )
};

export default ChildTwo;