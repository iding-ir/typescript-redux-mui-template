import React from "react";
import Inbox from "@material-ui/icons/Inbox";
import ProfileIcon from "@material-ui/icons/AccountBox";
import MultimediaIcon from "@material-ui/icons/PermMedia";
import PhotoIcon from "@material-ui/icons/PhotoCamera";
import VideoIcon from "@material-ui/icons/Movie";
import AudioIcon from "@material-ui/icons/Audiotrack";
import ScheduleIcon from "@material-ui/icons/Alarm";
// import NotesIcon from "@material-ui/icons/EventNote";
import SettingsIcon from "@material-ui/icons/Settings";

import * as URLS from "../constants/urls";
import Notes from "../components/Sidebar/Notes";
import Profile from "../pages/Profile";

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
    icon: <Inbox />,
    url: URLS.inbox,
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
    // url: URLS.multimedia,
    items: [
      {
        key: "photo",
        label: "sidebar.photo",
        icon: <PhotoIcon />,
        url: URLS.photo,
      },
      {
        key: "video",
        label: "sidebar.video",
        icon: <VideoIcon />,
        url: URLS.video,
      },
      {
        key: "audio",
        label: "sidebar.audio",
        icon: <AudioIcon />,
        url: URLS.audio,
      },
    ],
  },
  {
    key: "schedule",
    label: "sidebar.schedule",
    icon: <ScheduleIcon />,
    // url: URLS.schedule,
    action: () => {
      console.log("Clicked!");
    },
  },
  {
    key: "notes",
    // label: "sidebar.notes",
    // icon: <NotesIcon />,
    // url: URLS.notes,
    custom: <Notes />,
  },
  {
    key: "settings",
    label: "sidebar.settings",
    icon: <SettingsIcon />,
    // url: URLS.settings,
    action: () => {
      console.log("Clicked!");
    },
  },
];
