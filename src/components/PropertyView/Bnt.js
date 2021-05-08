import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  button: {
    background: "#44A1A0",
    color: "#fff",
    "&:hover": {
        background: "#0D5C63",
        color: "#fff"
        },
    margin: theme.spacing(1),  
 
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="flex-end">
      <Button
        display="flex" 
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<CloseIcon />} 
        component={RouterLink} to="/profile"
      >
          Close
           </Button>
    </Box>
  );
}