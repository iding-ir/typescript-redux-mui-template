import { teal, amber } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      light: teal[200],
      main: teal[400],
      dark: teal[800],
      contrastText: "#ffffff",
    },
    secondary: {
      light: amber[200],
      main: amber[400],
      dark: amber[800],
      contrastText: "#000000",
    },
  },
});

export default theme;
