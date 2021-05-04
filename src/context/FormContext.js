import { createContext, useState } from "react";

export const FormContext = createContext();

export const FormContextProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [formStep, setFormStep] = useState(0);
   
   
   const completeFormStep = () => {
     setFormStep((currentStep) => currentStep + 1);
   };

  const saveState = (values) => {
      completeFormStep()
      return setData(prevData => ({
          ...prevData,
          ...values
      }))
  }

  const value = {
    formStep,
    saveState,
    data
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
