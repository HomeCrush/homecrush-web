import React from "react"

import ToggleButton from "@material-ui/lab/ToggleButton";

import ChildrenWelcomeIcon from "@material-ui/icons/ChildFriendly";
import SmokersWelcomeIcon from "@material-ui/icons/SmokingRooms";
import PetsWelcomeIcon from "@material-ui/icons/Pets";


const RuleIconButton = ({ iconKey, ruleOnchange, selectedRules }) => {
  const components = {
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
        selected={selectedRules && selectedRules[iconKey]}
        onChange={() => ruleOnchange(iconKey)}
      >
        <SpecificIcon />
      </ToggleButton>
    </div>
  );
};

export default RuleIconButton