import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

import TvIcon from "@material-ui/icons/Tv";
import PoolIcon from "@material-ui/icons/Pool";
import ParkingIcon from "@material-ui/icons/LocalParking";
import EquippedKitchenIcon from "@material-ui/icons/Kitchen";
import LivingRoomIcon from "@material-ui/icons/Weekend";
import DiningRoomIcon from "@material-ui/icons/EventSeat";
import WorkAreaIcon from "@material-ui/icons/Computer";
import CourtyardIcon from "@material-ui/icons/LocalFlorist";
import JacuzziIcon from "@material-ui/icons/HotTub";
import WashingMachineIcon from "@material-ui/icons/LocalLaundryService";
import GymIcon from "@material-ui/icons/FitnessCenter";
import WifiIcon from "@material-ui/icons/Wifi";

import ChildrenWelcomeIcon from "@material-ui/icons/ChildFriendly";
import SmokersWelcomeIcon from "@material-ui/icons/SmokingRooms";
import PetsWelcomeIcon from "@material-ui/icons/Pets";

import SingleBedIcon from '@material-ui/icons/SingleBed';
import KingBedIcon from '@material-ui/icons/KingBed';
import { Divider } from '@material-ui/core';


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

export default function SimpleTooltips({amenities, rules, beds}) {

  const classes = useStyles();

  const components = {
    tv: TvIcon,
    pool: PoolIcon,
    parking: ParkingIcon,
    equippedKitchen: EquippedKitchenIcon,
    livingRoom: LivingRoomIcon,
    dinningRoom: DiningRoomIcon,
    workArea: WorkAreaIcon,
    courtyard: CourtyardIcon,
    jacuzzi: JacuzziIcon,
    washingMachine: WashingMachineIcon,
    gym: GymIcon,
    wifi: WifiIcon,
    childrenWelcome: ChildrenWelcomeIcon,
    smokersWelcome: SmokersWelcomeIcon,
    petsWelcome: PetsWelcomeIcon,
    singleBeds: SingleBedIcon,
    doubleBeds: KingBedIcon
  };

  const bedsChips = Object.entries(beds).map(([key, value]) => {
      const SpecificIcon = components[key];
    if (value > 0) {
      return (
        <Chip
          variant="outlined"
          size="small"
          icon={<SpecificIcon />}
          label={`${key}: ${value}`}
          key={`${key}`}
        />
      ) 
    }
    return null
  });
  

  const amenitiesChips = Object.entries(amenities).map(([key, value]) => {
    if (value === false) {
      const SpecificIcon = components[key];
      return (
        <Chip
          variant="outlined"
          size="small"
          icon={<SpecificIcon />}
          label={key}
          key={`${key}`}
        />
      );
    }
    return null
  });

  const rulesChips = Object.entries(rules).map(([key, value]) => {
    if (value === false) {
      const SpecificIcon = components[key];
      return (
        <Chip
          variant="outlined"
          size="small"
          icon={<SpecificIcon />}
          label={key}
          key={`${key}`}
        />
      );
    }
    return null;
  }); 

  return (
    <div className={classes.root}>
      {bedsChips}
      <Divider variant="middle" />
      {amenitiesChips}
      <Divider variant="middle" />
      {rulesChips}
    </div>
  );
}