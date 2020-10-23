import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ThemeIcon from "@material-ui/icons/EventNote";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import { toggleSwitch } from "../../actions/switches";
import { changeTheme } from "../../actions/theme";
import { IState } from "../../reducers";

import "./ThemeSwitch.scss";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    item: {
      borderLeft: "3px solid",
      borderColor: "transparent",
    },
  })
);

const ItemTheme = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const checked = useSelector((state: IState) => state.switches.theme);
  const theme = useSelector((state: IState) => state.theme);

  return (
    <ListItem button className={classes.item}>
      <ListItemIcon>
        <ThemeIcon />
      </ListItemIcon>

      <FormControlLabel
        control={
          <Switch
            checked={checked}
            color="primary"
            name="checkedA"
            onClick={() => {
              const newTheme = theme === "light" ? "dark" : "light";

              dispatch(changeTheme(newTheme));

              dispatch(toggleSwitch("theme"));
            }}
          />
        }
        label={t("sidebar.theme")}
        labelPlacement="start"
        className="sidebar-toggle"
      />
    </ListItem>
  );
};

export default ItemTheme;
