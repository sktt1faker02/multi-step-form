import NavigationStep from "./NavigationStep";
import Info from "./Info";
import Plan from "./Plan";
import AddOns from "./AddOns";
import Summary from "./Summary";
import steps from "../data";
import { useState } from "react";

const CardForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [summaryDetails, setSummaryDetails] = useState([
    {
      plan: null,
      bill: "monthly",
      addons: [],
    },
  ]);

  const handleStepNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleGoBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const getSummaryData = (summary) => {
    setSummaryDetails((prevDetails) => {
      // Merge the new data with the existing summary details
      return [{ ...prevDetails[0], ...summary }];
    });
  };

  console.log(currentStep);
  // console.log(summaryDetails);

  return (
    <>
      <NavigationStep />
      {currentStep === 1 && <Info steps={steps} handleStepNext={handleStepNext} currentStep={currentStep} />}
      {currentStep === 2 && <Plan steps={steps} handleStepNext={handleStepNext} getSummaryData={getSummaryData} currentStep={currentStep} handleGoBack={handleGoBack} />}
      {currentStep === 3 && <AddOns steps={steps} handleStepNext={handleStepNext} billingType={summaryDetails[0].bill} getSummaryData={getSummaryData} currentStep={currentStep} handleGoBack={handleGoBack} />}
      {currentStep === 4 && <Summary steps={steps} summaryDetails={summaryDetails} currentStep={currentStep} handleGoBack={handleGoBack} />}
    </>
  );
};

export default CardForm;
