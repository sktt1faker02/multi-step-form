import NavigationStep from "./NavigationStep";
import Info from "./Info";
import Plan from "./Plan";
import AddOns from "./AddOns";
import Summary from "./Summary";
import Success from "./Success";
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

  const handleChangePlan = () => {
    setCurrentStep(2);
  };

  const navigateButton = (navStep) => {
    setCurrentStep(navStep);
  };

  const getSummaryData = (summary) => {
    setSummaryDetails((prevDetails) => {
      // Merge the new data with the existing summary details
      return [{ ...prevDetails[0], ...summary }];
    });
  };

  // console.log(currentStep);
  // console.log(summaryDetails);

  return (
    <>
      <NavigationStep steps={steps} currentStep={currentStep} navigateButton={navigateButton} />
      {currentStep === 1 && <Info steps={steps} handleStepNext={handleStepNext} currentStep={currentStep} getSummaryData={getSummaryData} summaryDetails={summaryDetails} />}
      {currentStep === 2 && <Plan steps={steps} handleStepNext={handleStepNext} getSummaryData={getSummaryData} currentStep={currentStep} handleGoBack={handleGoBack} summaryDetails={summaryDetails} />}
      {currentStep === 3 && <AddOns steps={steps} handleStepNext={handleStepNext} billingType={summaryDetails[0].bill} getSummaryData={getSummaryData} currentStep={currentStep} handleGoBack={handleGoBack} summaryDetails={summaryDetails} />}
      {currentStep === 4 && <Summary steps={steps} summaryDetails={summaryDetails} currentStep={currentStep} handleGoBack={handleGoBack} handleChangePlan={handleChangePlan} handleStepNext={handleStepNext} />}
      {currentStep === 5 && <Success />}
    </>
  );
};

export default CardForm;
