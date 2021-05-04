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
import KitchenIcon from '@material-ui/icons/Kitchen';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import ComputerIcon from '@material-ui/icons/Computer';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import HotTubIcon from '@material-ui/icons/HotTub';
import LocalLaundryServiceIcon from '@material-ui/icons/LocalLaundryService';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import WeekendIcon from '@material-ui/icons/Weekend';


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
      < KitchenIcon className={classes.icon} />
      </IconButton>
      <IconButton>
      <WeekendIcon className={classes.icon} />
      </IconButton>
      <IconButton>
     < EventSeatIcon className={classes.icon} />
     </IconButton>
      <IconButton>
      < LocalLaundryServiceIcon className={classes.icon} />
      </IconButton>
      <IconButton>
      < ComputerIcon className={classes.icon} />
      </IconButton>
      <IconButton>
      < LocalFloristIcon className={classes.icon} />
      </IconButton> 
      <IconButton>
      < PoolIcon className={classes.icon} />
      </IconButton>
      <IconButton>
      < HotTubIcon className={classes.icon} />
      </IconButton>
      <IconButton>
      <FitnessCenterIcon className={classes.icon} />
      </IconButton>
      <IconButton>
      < LocalParkingIcon className={classes.icon} />
      </IconButton>
      <IconButton>
      <SmokingRoomsIcon className={classes.icon} />
      </IconButton>
      <IconButton>
      <PetsIcon className={classes.icon} />
      </IconButton>
      <IconButton>
      <ChildFriendlyIcon className={classes.icon} />
      </IconButton>

    </div>
     </Grid>
  );
}