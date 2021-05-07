import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import BathtubIcon from '@material-ui/icons/Bathtub';
import TvIcon from '@material-ui/icons/Tv';
import WifiIcon from '@material-ui/icons/Wifi';
import SmokingRoomsIcon from '@material-ui/icons/SmokingRooms';
import PetsIcon from '@material-ui/icons/Pets';
import PoolIcon from '@material-ui/icons/Pool';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
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
import Chip from '@material-ui/core/Chip';
import SingleBedIcon from '@material-ui/icons/SingleBed';
import KingBedIcon from '@material-ui/icons/KingBed';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function SimpleTooltips() {

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Chip
        variant="outlined"
        size="small"
        icon={<LocalHotelIcon />}
        label="Rooms: 3"
        onClick={handleClick}
   />
   <Chip
       variant="outlined"
       size="small"
       icon={<SingleBedIcon />}
       label="Single bed: 2"
       onClick={handleClick}
    />
   <Chip
       variant="outlined"
       size="small"
       icon={<KingBedIcon />}
       label="Double bed: 3"
       onClick={handleClick}
    />
    <Chip
      variant="outlined"
      size="small"
      icon={<BathtubIcon />}
      label="BathroomRooms: 2"
      onClick={handleClick}
    />
    <Chip
      variant="outlined"
      size="small"
      icon={<TvIcon />}
      label="TV"
      onClick={handleClick}
     />
    <Chip
      variant="outlined"
      size="small"
      icon={<WifiIcon />}
      label="WiFi"
      onClick={handleClick}
    />
    <Chip
      variant="outlined"
      size="small"
      icon={<KitchenIcon />}
      label="Fully equipped kitchen"
      onClick={handleClick}
    />
    <Chip
      variant="outlined"
      size="small"
      icon={<WeekendIcon />}
      label="Living Room"
      onClick={handleClick}
    />
     <Chip
     variant="outlined"
     size="small"
     icon={<EventSeatIcon />}
     label="Dining Room"
     onClick={handleClick}
    />
    <Chip
     variant="outlined"
     size="small"
     icon={<LocalLaundryServiceIcon />}
     label="Dish Washer"
     onClick={handleClick}
  />
  <Chip
    variant="outlined"
    size="small"
    icon={<ComputerIcon />}
    label="Work Place"
    onClick={handleClick}
   />
     <Chip
    variant="outlined"
    size="small"
    icon={<LocalFloristIcon />}
    label="Yard"
    onClick={handleClick}
  />
   <Chip
    variant="outlined"
    size="small"
    icon={<PoolIcon />}
    label="Pool"
    onClick={handleClick}
  />
     <Chip
    variant="outlined"
    size="small"
    icon={<HotTubIcon  />}
    label="Jacuzzi"
    onClick={handleClick}
  />
       <Chip
    variant="outlined"
    size="small"
    icon={<FitnessCenterIcon  />}
    label="Gym"
    onClick={handleClick}
  />
       <Chip
    variant="outlined"
    size="small"
    icon={<LocalParkingIcon  />}
    label="Parking"
    onClick={handleClick}
    />
<Chip
   variant="outlined"
   size="small"
   icon={<SmokingRoomsIcon  />}
   label="Smoking allowed "
   onClick={handleClick}
/>
<Chip
   variant="outlined"
   size="small"
   icon={<PetsIcon  />}
   label="Pets allowed "
   onClick={handleClick}
/>
<Chip
   variant="outlined"
   size="small"
   icon={<ChildFriendlyIcon  />}
   label="Pets allowed "
   onClick={handleClick}
/>
    </div>
  );
}