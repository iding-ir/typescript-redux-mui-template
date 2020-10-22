import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { CssBaseline, ThemeProvider } from "@material-ui/core";

import useTheme from "../../theme";
import AppRouter from "../AppRouter/AppRouter";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
    },
  })
);

interface IPropsWrapper {
  children: JSX.Element[];
}

const Wrapper = (props: IPropsWrapper) => {
  const classes = useStyles();
  const { theme } = useTheme();

  return (
    <AppRouter>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />

          {props.children}
        </div>
      </ThemeProvider>
    </AppRouter>
  );
};

export default Wrapper;
