import React from 'react';

import { Typography } from '@mui/material';

import ThemeContext from './ThemeContext';
import './App.css';
import ChildComponent from './ChildComp';
import ChildTwo from './ChildTwo';

function App() {

  const [value, setThemeValue] = React.useState({
    mode: 'light',
    color: 'red',
  });

  return (
    <div className="App">
      <ThemeContext.Provider value={{ value, setThemeValue }}>
        <Typography variant='h1'>Context</Typography>
        <ChildComponent />
        <ChildTwo />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
