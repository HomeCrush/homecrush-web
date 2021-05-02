
import React from "react";
import { useState } from "react";
import FormStepOne from "./FormStepOne";
import FormStepTwo from "./FormStepTwo";



const PropertyForm = () => {
    const [formStep, setFormStep] = useState(0)
    const completeFormStep = () => {
      setFormStep(currentStep => currentStep +1)
    }
    return (
      <div className="PropertyForm">
        <p>{String(formStep)}</p>
        {formStep === 0 && <FormStepOne  completeFormFunction={completeFormStep}/>}
        {formStep === 1 && <FormStepTwo />}
      </div>
    );
}

export default PropertyForm