import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import BathtubIcon from '@material-ui/icons/Bathtub';
import TvIcon from '@material-ui/icons/Tv';
import WifiIcon from '@material-ui/icons/Wifi';
import SmokingRoomsIcon from '@material-ui/icons/SmokingRooms';
import PetsIcon from '@material-ui/icons/Pets';
import PoolIcon from '@material-ui/icons/Pool';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
  icon:{
    paddingRight: theme.spacing(1),
  },
}));


export default function SimpleTooltips() {


  const classes = useStyles();

  return (
    <Grid item>
    <div>
      <Tooltip disableFocusListener disableTouchListener title="4 rooms">
        <IconButton  >
        <LocalHotelIcon className={classes.icon} />
        </IconButton>
      </Tooltip>
      <Tooltip disableFocusListener disableTouchListener title="2 bathrooms" >
      <IconButton >
      <BathtubIcon className={classes.icon}/>
      </IconButton>
      </Tooltip>
      <IconButton>
      <TvIcon className={classes.icon} />
      </IconButton>
      <IconButton>
      <WifiIcon className={classes.icon} />
      </IconButton>
      <IconButton>
      < PoolIcon className={classes.icon} />
      </IconButton>
      <IconButton>
      <SmokingRoomsIcon className={classes.icon} />
      </IconButton>
      <IconButton>
      <PetsIcon className={classes.icon} />
      </IconButton>
      <IconButton>
      < LocalParkingIcon className={classes.icon} />
      </IconButton>
    </div>
     </Grid>
  );
}