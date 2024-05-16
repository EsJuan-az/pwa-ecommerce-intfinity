import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey, purple } from '@mui/material/colors';
import Alertbar from '../components/Alertbar';

const UIContext = React.createContext();
const themeDefault = createTheme({
  typography: {},
  palette: {
      primary: {
          main: purple[900],
          dark: grey[900],
          light: grey[200],
          contrastText: grey[200],
      },
    },
});
themeDefault.typography.h1 = {
  fontSize: 48,
  fontFamily: '"Poppins", cursive',
};
themeDefault.typography.h2 = {
  fontSize: 32,
  fontFamily: '"Poppins", cursive',
};
themeDefault.typography.h3 = {
  fontSize: 24,
  fontFamily: '"Roboto", sans-serif',
};
themeDefault.typography.h4 = {
  fontSize: 18,
  fontFamily: '"Roboto", sans-serif',
};
themeDefault.typography.body1 = {
  fontSize: 12,
  fontFamily: '"Roboto", sans-serif',
};

const UIProvider = ({children}) => {
  const [ alertbar, setAlertbar ] = useState({
    open: false,
  });
  const handleSnack = (options) => {
    setAlertbar({
      ...alertbar,
      ...options,
      open: true,
      onClose(){
        setAlertbar({
          ...alertbar,
          ...options,
          open: false,
        });
      },
    });
  };
  
  return (
    <UIContext.Provider value={{
      handleSnack,
    }}>
        <ThemeProvider theme={themeDefault}>
            {children}
            <Alertbar alertbar={alertbar}/>
        </ThemeProvider>
    </UIContext.Provider>
  );
};
UIProvider.propTypes = {
    children: PropTypes.node,
};
export { UIContext, UIProvider };