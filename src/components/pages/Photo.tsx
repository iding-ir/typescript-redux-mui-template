import React from "react";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";

interface IPropsPhoto {}

const Photo = (props: IPropsPhoto) => {
  const { t } = useTranslation();

  return (
    <>
      <Typography paragraph>{t("content.p2")}</Typography>

      <Typography paragraph>{t("content.p1")}</Typography>
    </>
  );
};

export default Photo;
