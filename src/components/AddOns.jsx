import NextPrevious from "./NextPrevious";
import { useState, useEffect } from "react";

const AddOns = ({ steps, billingType, handleStepNext, getSummaryData, currentStep, handleGoBack, summaryDetails }) => {
  const [addonCheck, setAddonCheck] = useState(steps[2].addOns.map(() => false));
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const handleAddonClick = (index) => {
    const updatedCheckbox = [...addonCheck];
    updatedCheckbox[index] = !updatedCheckbox[index];
    setAddonCheck(updatedCheckbox);

    const checkedCheckboxes = updatedCheckbox.map((isChecked, idx) => (isChecked ? steps[2].addOns[idx] : null)).filter((addon) => addon !== null);

    setSelectedAddOns([...checkedCheckboxes]);
  };

  useEffect(() => {
    if (summaryDetails[0].addons && summaryDetails[0].addons.length > 0) {
      // Initialize addonCheck and selectedAddOns based on summaryDetails[0].addons
      const updatedAddonCheck = steps[2].addOns.map((addon) => summaryDetails[0].addons.some((selectedAddon) => selectedAddon.type === addon.type));
      setAddonCheck(updatedAddonCheck);

      const updatedSelectedAddOns = summaryDetails[0].addons.filter((selectedAddon) => updatedAddonCheck.some((isChecked, idx) => isChecked && selectedAddon.type === steps[2].addOns[idx].type));
      setSelectedAddOns(updatedSelectedAddOns);
    }
  }, [summaryDetails, steps]);

  const handleSubmit = () => {
    // console.log(selectedAddOns);
    getSummaryData({ addons: [...selectedAddOns] });
    handleStepNext();
  };

  const onBack = () => {
    getSummaryData({ addons: [...selectedAddOns] });
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="step-title">{steps[2].title}</h2>
        <p className="step-description">{steps[2].info}</p>
        <form className="form">
          <div className="addons">
            {steps[2].addOns.map((addon, index) => {
              const isSelected = addonCheck[index];
              return (
                <div className={`addon ${isSelected ? "selected" : ""}`} key={index} onClick={() => handleAddonClick(index)}>
                  <input type="checkbox" checked={addonCheck[index]} onChange={handleAddonClick} />
                  <div className="details">
                    <h4>{addon.type}</h4>
                    <p>{addon.info}</p>
                  </div>
                  <p className="price">{`+$${billingType === "yearly" ? addon.year + "/yr" : addon.month + "/mo"}`}</p>
                </div>
              );
            })}
          </div>
        </form>
      </div>
      <NextPrevious onSubmit={handleSubmit} currentStep={currentStep} handleGoBack={handleGoBack} onBack={onBack} />
    </div>
  );
};

export default AddOns;
