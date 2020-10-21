import React from "react";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";

interface IPropsProfile {}

const Profile = (props: IPropsProfile) => {
  const { t } = useTranslation();

  return (
    <>
      <Typography paragraph>{t("content.p1")}</Typography>

      <Typography paragraph>{t("content.p2")}</Typography>
    </>
  );
};

export default Profile;
