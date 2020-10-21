import React from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { drawerWidth } from "../../constants";
import { closeSidebar } from "../../actions/sidebar";
import { routes, IRoute, IRouteGroup, IRoutes } from "../../router/routes";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    link: {
      display: "flex",
      width: "100%",
      textDecoration: "none",
      color: theme.palette.primary.contrastText,
    },
    linkLabel: {
      flexGrow: 10,
    },
  })
);

interface IPropsSidebar {}

const Sidebar = (props: IPropsSidebar) => {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [open, setOpen] = React.useState<any>({});

  const sidebarOpen = useSelector((state: any) => state.sidebar.open);

  const handleDrawerClose = () => {
    dispatch(closeSidebar());
  };

  const renderList = (list: IRoutes, nested: boolean) => {
    const renderItems = () => {
      return list.map((item: IRoute | IRouteGroup) => {
        const handleClick = () => {
          setOpen({ ...open, [item.key]: !open[item.key] });
        };

        const className = clsx({
          [classes.nested]: nested,
        });

        const renderCollapse = () => {
          if ("items" in item) {
            return (
              <Collapse in={open[item.key]} timeout="auto" unmountOnExit>
                {renderList(item.items, true)}
              </Collapse>
            );
          }
        };

        const renderCollapseIcon = () => {
          if ("items" in item) {
            return open[item.key] ? <ExpandLess /> : <ExpandMore />;
          }
        };

        const onClick = () => {
          if (item.action) {
            item.action();
          }

          handleClick();
        };

        return (
          <div key={item.key}>
            <ListItem button className={className} onClick={onClick}>
              <Link to={item.url || ""} className={classes.link}>
                <ListItemIcon>{item.icon}</ListItemIcon>

                <ListItemText
                  primary={t(item.label)}
                  className={classes.linkLabel}
                />

                {renderCollapseIcon()}
              </Link>
            </ListItem>

            {renderCollapse()}
          </div>
        );
      });
    };

    return <List>{renderItems()}</List>;
  };

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: sidebarOpen,
        [classes.drawerClose]: !sidebarOpen,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: sidebarOpen,
          [classes.drawerClose]: !sidebarOpen,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>

      <Divider />

      {renderList(routes, false)}
    </Drawer>
  );
};

export default Sidebar;
