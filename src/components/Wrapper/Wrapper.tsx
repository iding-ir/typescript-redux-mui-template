import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";

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

  return <div className={classes.root}>{props.children}</div>;
};

export default Wrapper;
