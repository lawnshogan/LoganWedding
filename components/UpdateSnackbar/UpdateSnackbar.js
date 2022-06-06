import React from "react";
import Link from 'next/link';
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from '@material-ui/core/Typography';
import useStyles from "./UpdateSnackbar.styles";

export default function SimpleSnackbar() {
  const [open, setOpen] = React.useState(true);
  const classes = useStyles();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={open}
        onClose={handleClose}
        action={
          <React.Fragment>
            <Typography component="span">
              IMPORTANT: We have some wedding schedule updates. Please see the{" "}
              <Link  href='/details'><a className={classes.link}>Details</a></Link> page
            </Typography>

            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}
