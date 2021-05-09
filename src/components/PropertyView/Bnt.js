import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import Box from '@material-ui/core/Box';
import EmailIcon from "@material-ui/icons/AlternateEmail";

const useStyles = makeStyles((theme) => ({
  contact: {
    background: "#44A1A0",
    margin: theme.spacing(1),
    color: "#fff",
    "&:hover": {
      background: "#0D5C63",
      color: "#fff",
    },
    margin: theme.spacing(1),
  },
  close: {
    background: "#D62828",
    margin: theme.spacing(1),
    color: "#fff",
    "&:hover": {
      background: "#F94144",
      color: "#fff",
    },
    margin: theme.spacing(1),
  },
}));

export default function IconLabelButtons({destiny, label}) {
  const classes = useStyles();

  const components = {
   close: CloseIcon,
   contact: EmailIcon
  };

  const SpecificIcon = components[label];

  return (
    <Box display="flex" justifyContent="flex-end">
      <Button
        display="flex" 
        variant="contained"
        color="primary"
        size="small"
        className={label == "close" ? classes.close : classes.contact}
        startIcon={<SpecificIcon />} 
        href={destiny}
      >
          {label}
           </Button>
    </Box>
  );
}