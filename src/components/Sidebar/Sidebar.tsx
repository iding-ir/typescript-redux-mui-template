import React from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { drawerWidth } from "../../constants";
import { toggleSidebar } from "../../actions/sidebar";
import { setPage } from "../../actions/page";
import { routes, IRoute, IRouteGroup, IRoutes } from "../../router/routes";
import { IState } from "../../reducers";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    // necessary for content to be below app bar
    toolbar: {
      fontSize: "1.2rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      ...theme.mixins.toolbar,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    item: {
      borderLeft: "3px solid",
      borderColor: "transparent",
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    selected: {
      borderLeft: "3px solid",
      borderColor: theme.palette.secondary.main,
    },
    link: {
      display: "flex",
      width: "100%",
      textDecoration: "none",
      color: theme.palette.primary.contrastText,
    },
  })
);

interface IPropsSidebar {}

const Sidebar = (props: IPropsSidebar) => {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [open, setOpen] = React.useState<{ [key: string]: boolean }>({});

  const sidebarOpen = useSelector((state: IState) => state.sidebar.open);
  const selectedPage = useSelector((state: IState) => state.page.selected);

  const handleDrawerToggle = () => {
    dispatch(toggleSidebar());
  };

  const renderList = (list: IRoutes, nested: boolean) => {
    const renderItems = () =>
      list.map((item: IRoute | IRouteGroup) => {
        const className = clsx(classes.item, {
          [classes.nested]: nested,
          [classes.selected]: selectedPage === item.key,
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

          if (item.url && item.content) {
            dispatch(setPage(item));
          }

          setOpen({ ...open, [item.key]: !open[item.key] });
        };

        const renderItem = () => {
          if (item.custom) {
            return item.custom;
          } else if (item.label) {
            return (
              <ListItem button className={className} onClick={onClick}>
                <Link to={item.url || ""} className={classes.link}>
                  <ListItemIcon>{item.icon}</ListItemIcon>

                  <ListItemText primary={t(item.label)} />

                  {renderCollapseIcon()}
                </Link>
              </ListItem>
            );
          }
        };

        return (
          <div key={item.key}>
            {renderItem()}

            {renderCollapse()}
          </div>
        );
      });

    return <List>{renderItems()}</List>;
  };

  const drawer = (
    <div>
      <div className={classes.toolbar}>{t("sidebar.title")}</div>

      <Divider />

      {renderList(routes, false)}
    </div>
  );

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={sidebarOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>

      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default Sidebar;
