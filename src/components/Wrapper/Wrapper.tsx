import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { CssBaseline, ThemeProvider } from "@material-ui/core";

import useTheme from "../../theme";

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
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />

        {props.children}
      </div>
    </ThemeProvider>
  );
};

export default Wrapper;
