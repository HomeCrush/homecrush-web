import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  btn: {
    background: "#44A1A0",
    margin: theme.spacing(2),
    color: "#fff",
    "&:hover": {
      background: "#0D5C63",
      color: "#fff",
    },
  },
}));

export default function Card({ title, images, location }) {
  const classes = useStyles();
  return (
    <div className="card">
      {
        <div
          className="cardImage"
          style={{
            background: `url('${images}')`,
          }}
        ></div>
      }
      <div className="card_info">
        <div className="card_title">
          <Typography component="h5" variant="subtitle1">
            {title}
          </Typography>
          <Typography component="h6" variant="subtitle2">
            {location}
          </Typography>
        </div>
        <Button
          className={classes.btn}
          size="small"
          color="primary"
          component={RouterLink}
          to="/slider"
        >
          Edit
        </Button>
      </div>
    </div>
  );
}

