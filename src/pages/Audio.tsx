import React from "react";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";

interface IPropsAudio {}

const Audio = (props: IPropsAudio) => {
  const { t } = useTranslation();

  return (
    <>
      <Typography paragraph>{t("content.p1")}</Typography>
    </>
  );
};

export default Audio;
