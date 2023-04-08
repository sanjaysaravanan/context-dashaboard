import React from 'react';

import { Button, Typography } from '@mui/material';

import ThemeContext from './ThemeContext';

const ChildComponent = () => {
  return (
    <ThemeContext.Consumer>
      {({ value, setThemeValue }) => (
        <>
          <Typography variant="h2"
            sx={{
              color: value.color
            }}
          >{value.mode}</Typography>
          <Button onClick={() => setThemeValue({ mode: 'dark', color: 'black' })} >Change To Dark</Button>
        </>
      )}
    </ThemeContext.Consumer>
  )
};

export default ChildComponent