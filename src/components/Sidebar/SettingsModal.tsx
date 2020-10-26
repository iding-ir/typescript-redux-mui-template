import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SettingsIcon from "@material-ui/icons/Settings";

import Modal from "../Modal/Modal";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    item: {
      borderLeft: "3px solid",
      borderColor: "transparent",
    },
  })
);

const ItemSettings = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderModal = () => {
    return (
      <Modal
        open={open}
        title={t("modal.title")}
        content={<div>{t("modal.content")}</div>}
        handleClose={handleClose}
      />
    );
  };

  return (
    <>
      <ListItem button className={classes.item} onClick={handleOpen}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>

        <ListItemText primary={t("sidebar.settings")} />
      </ListItem>

      {renderModal()}
    </>
  );
};

export default ItemSettings;
