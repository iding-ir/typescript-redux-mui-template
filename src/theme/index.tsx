import { createMuiTheme } from "@material-ui/core/styles";

import { primary, secondary } from "./colors";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      light: primary[200],
      main: primary[400],
      dark: primary[800],
      contrastText: "#ffffff",
    },
    secondary: {
      light: secondary[200],
      main: secondary[400],
      dark: secondary[800],
      contrastText: "#000000",
    },
  },
});

export default theme;
