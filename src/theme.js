import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    background: {
      default: "#e3eee2",
    },
    primary: {
      main: '#003700',
    },
    secondary: {
      main: '#330069',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
