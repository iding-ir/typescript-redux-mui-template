import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";

import { closeModal } from "../../actions/modal";
import { IState } from "../../reducers";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;

  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>

      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
    minWidth: "240px",
    [theme.breakpoints.up("sm")]: {
      minWidth: "360px",
    },
    [theme.breakpoints.up("md")]: {
      minWidth: "480px",
    },
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

interface IPropsModal {
  title: string;
  content: JSX.Element;
}

const Modal = (props: IPropsModal) => {
  const { title, content } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const open = useSelector((state: IState) => state.modal.open);

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="dialog-title" open={open}>
        <DialogTitle id="dialog-title" onClose={handleClose}>
          {title}
        </DialogTitle>

        <DialogContent dividers>{content}</DialogContent>

        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            {t("modal.close")}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Modal;
