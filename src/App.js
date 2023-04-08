import React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import ThemeContext from './ThemeContext';
import './App.css';
import Layout from './Layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';

const lightTheme = createTheme({
});

function App() {

  const [value, setThemeValue] = React.useState('light');

  return (
    <ThemeContext.Provider value={{ value, setThemeValue }}>
      <div className="App">
        <ThemeProvider theme={lightTheme} >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />} >
                <Route index element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="components" element={<h1>Components</h1>} />
                <Route path="pages" element={<h1>Pages</h1>} />
                <Route path="charts" element={<Dashboard />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
