import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    background: {
      default: "#e3ebe7",
    },
    primary: {
      main: '#446a50',
    },
    secondary: {
      main: '#5d324d',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
