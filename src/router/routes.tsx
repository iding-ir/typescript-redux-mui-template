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

export interface IRoute {
  key: string;
  label: string;
  icon: JSX.Element;
}

export interface IRouteGroup extends IRoute {
  items: IRoutes;
}

export type IRoutes = (IRoute | IRouteGroup)[];

export const routes: IRoutes = [
  {
    key: 'inbox',
    label: "sidebar.inbox",
    icon: <Inbox />,
  },
  {
    key: 'profile',
    label: "sidebar.profile",
    icon: <Profile />,
  },
  {
    key: 'multimedia',
    label: "sidebar.multimedia",
    icon: <Multimedia />,
    items: [
      {
        key: 'photo',
        label: "sidebar.photo",
        icon: <Photo />,
      },
      {
        key: 'video',
        label: "sidebar.video",
        icon: <Video />,
      },
      {
        key: 'audio',
        label: "sidebar.audio",
        icon: <Audio />,
      },
    ],
  },
  {
    key: 'schedule',
    label: "sidebar.schedule",
    icon: <Schedule />,
  },
  {
    key: 'notes',
    label: "sidebar.notes",
    icon: <Notes />,
  },
  {
    key: 'settings',
    label: "sidebar.settings",
    icon: <Settings />,
  },
];
