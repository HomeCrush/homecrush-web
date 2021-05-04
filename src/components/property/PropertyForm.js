import React, { useContext } from "react";

import { FormContext } from "../../context/FormContext";
import FormStepOne from "./FormStepOne";
import FormStepTwo from "./FormStepTwo";



const PropertyForm = () => {
   const { formStep } = useContext(FormContext)
    return (
      <div className="PropertyForm">
        <p>{String(formStep)}</p>
        {formStep === 0 && <FormStepOne />}
        {formStep === 1 && <FormStepTwo />}
      </div>
    );
}

export default PropertyForm