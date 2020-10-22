import React from "react";
import { useSelector } from "react-redux";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { IState } from "../../reducers";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

interface IPropsContent {}

const Content = (props: IPropsContent) => {
  const classes = useStyles();

  const selectedPage = useSelector((state: IState) => state.page.selected);

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />

      {selectedPage.content}
    </main>
  );
};

export default Content;
