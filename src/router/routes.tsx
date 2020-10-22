import React from "react";
import InboxIcon from "@material-ui/icons/Inbox";
import ProfileIcon from "@material-ui/icons/AccountBox";
import MultimediaIcon from "@material-ui/icons/PermMedia";
import PhotoIcon from "@material-ui/icons/PhotoCamera";
import VideoIcon from "@material-ui/icons/Movie";
import AudioIcon from "@material-ui/icons/Audiotrack";
import ScheduleIcon from "@material-ui/icons/Alarm";

import * as URLS from "../constants/urls";
import ItemTheme from "../components/Sidebar/ItemTheme";
import ItemSettings from "../components/Sidebar/ItemSettings";
import Inbox from "../components/pages/Inbox";
import Profile from "../components/pages/Profile";

export interface IRoute {
  key: string;
  label?: string;
  icon?: JSX.Element;
  url?: string;
  content?: JSX.Element;
  action?: () => void;
  custom?: JSX.Element;
}

export interface IRouteGroup extends IRoute {
  items: IRoutes;
}

export type IRoutes = (IRoute | IRouteGroup)[];

export const routes: IRoutes = [
  {
    key: "inbox",
    label: "sidebar.inbox",
    icon: <InboxIcon />,
    url: URLS.inbox,
    content: <Inbox />,
  },
  {
    key: "profile",
    label: "sidebar.profile",
    icon: <ProfileIcon />,
    url: URLS.profile,
    content: <Profile />,
  },
  {
    key: "multimedia",
    label: "sidebar.multimedia",
    icon: <MultimediaIcon />,
    items: [
      {
        key: "photo",
        label: "sidebar.photo",
        icon: <PhotoIcon />,
      },
      {
        key: "video",
        label: "sidebar.video",
        icon: <VideoIcon />,
      },
      {
        key: "audio",
        label: "sidebar.audio",
        icon: <AudioIcon />,
      },
    ],
  },
  {
    key: "schedule",
    label: "sidebar.schedule",
    icon: <ScheduleIcon />,
    action: () => {
      console.log("Clicked!");
    },
  },
  {
    key: "theme",
    custom: <ItemTheme />,
  },
  {
    key: "settings",
    custom: <ItemSettings />,
  },
];
