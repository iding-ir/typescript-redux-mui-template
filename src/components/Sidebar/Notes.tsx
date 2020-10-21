import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import NotesIcon from "@material-ui/icons/EventNote";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import { toggleSidebarSwitch } from "../../actions/sidebar";
import { IState } from "../../reducers";

import "./Notes.scss";

const Notes = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const notes = useSelector((state: IState) => state.sidebar.switches.notes);

  return (
    <ListItem button>
      <ListItemIcon>
        <NotesIcon />
      </ListItemIcon>

      <FormControlLabel
        control={<Switch checked={notes} color="primary" name="checkedA" />}
        label={t("sidebar.notes")}
        labelPlacement="start"
        className="sidebar-toggle"
        onClick={() => {
          dispatch(toggleSidebarSwitch("notes"));
        }}
      />
    </ListItem>
  );
};

export default Notes;
