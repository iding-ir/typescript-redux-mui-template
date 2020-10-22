import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SettingsIcon from "@material-ui/icons/Settings";

import "./ItemSettings.scss";
import Modal from "../Modal/Modal";
import { openModal } from "../../actions/modal";
import { IState } from "../../reducers";

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
  const dispatch = useDispatch();

  const open = useSelector((state: IState) => state.modal.open);

  const handleOpen = () => {
    dispatch(openModal());
  };

  const renderModal = () => {
    return open && <Modal />;
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
