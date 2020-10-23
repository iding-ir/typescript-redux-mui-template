import React from "react";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";

interface IPropsVideo {}

const Video = (props: IPropsVideo) => {
  const { t } = useTranslation();

  return (
    <>
      <Typography paragraph>{t("content.p2")}</Typography>
    </>
  );
};

export default Video;
