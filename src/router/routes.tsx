import React from "react";
import Inbox from "@material-ui/icons/Inbox";
import Profile from "@material-ui/icons/AccountBox";
import Multimedia from "@material-ui/icons/PermMedia";
import Photo from "@material-ui/icons/PhotoCamera";
import Video from "@material-ui/icons/Movie";
import Audio from "@material-ui/icons/Audiotrack";
import Schedule from "@material-ui/icons/Alarm";
import Notes from "@material-ui/icons/EventNote";
import Settings from "@material-ui/icons/Settings";

import * as URLS from "../constants/urls";

export interface IRoute {
  key: string;
  label: string;
  icon: JSX.Element;
  url?: string;
  action?: () => void;
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
    icon: <Profile />,
    url: URLS.profile,
  },
  {
    key: "multimedia",
    label: "sidebar.multimedia",
    icon: <Multimedia />,
    // url: URLS.multimedia,
    items: [
      {
        key: "photo",
        label: "sidebar.photo",
        icon: <Photo />,
        url: URLS.photo,
      },
      {
        key: "video",
        label: "sidebar.video",
        icon: <Video />,
        url: URLS.video,
      },
      {
        key: "audio",
        label: "sidebar.audio",
        icon: <Audio />,
        url: URLS.audio,
      },
    ],
  },
  {
    key: "schedule",
    label: "sidebar.schedule",
    icon: <Schedule />,
    // url: URLS.schedule,
    action: () => {
      console.log("Clicked!");
    },
  },
  {
    key: "notes",
    label: "sidebar.notes",
    icon: <Notes />,
    url: URLS.notes,
  },
  {
    key: "settings",
    label: "sidebar.settings",
    icon: <Settings />,
    // url: URLS.settings,
    action: () => {
      console.log("Clicked!");
    },
  },
];
