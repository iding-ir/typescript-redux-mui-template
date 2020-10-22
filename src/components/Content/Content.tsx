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

  const SelectedPageContent = useSelector(
    (state: IState) => state.page.selectedPageContent || <div />
  );

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />

      {SelectedPageContent}
    </main>
  );
};

export default Content;
