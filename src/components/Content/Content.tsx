import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

interface IPropsContent {}

const Content = (props: IPropsContent) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />

      <Typography paragraph>{t("content.p1")}</Typography>

      <Typography paragraph>{t("content.p2")}</Typography>
    </main>
  );
};

export default Content;
