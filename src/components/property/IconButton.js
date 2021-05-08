import React from "react"

import ToggleButton from "@material-ui/lab/ToggleButton";
import TvIcon from "@material-ui/icons/Tv";
import PoolIcon from '@material-ui/icons/Pool';
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


const IconButton = ({ iconKey, amenitieOnchange, selectedAmenities }) => {

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
  };

  const SpecificIcon = components[iconKey];

  return (
    <div className="IconButton">
      <ToggleButton
        value="check"
        size="medium"
        selected={selectedAmenities && selectedAmenities[iconKey]}
        onChange={() => amenitieOnchange(iconKey)}
      >
        <SpecificIcon />
      </ToggleButton>
    </div>
  );
};

export default IconButton