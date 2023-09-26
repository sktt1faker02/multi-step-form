import NextPrevious from "./NextPrevious";
import { useState } from "react";

const AddOns = ({ steps, billingType, handleStepNext, getSummaryData, currentStep, handleGoBack }) => {
  const [addonCheck, setAddonCheck] = useState(steps[2].addOns.map(() => false));
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const handleAddonClick = (index) => {
    const updatedCheckbox = [...addonCheck];
    updatedCheckbox[index] = !updatedCheckbox[index];
    setAddonCheck(updatedCheckbox);

    const checkedCheckboxes = updatedCheckbox.map((isChecked, idx) => (isChecked ? steps[2].addOns[idx] : null)).filter((addon) => addon !== null);

    setSelectedAddOns([...checkedCheckboxes]);
  };

  const handleSubmit = () => {
    // console.log(selectedAddOns);
    getSummaryData({ addons: [...selectedAddOns] });
    handleStepNext();
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
      <NextPrevious onSubmit={handleSubmit} currentStep={currentStep} handleGoBack={handleGoBack} />
    </div>
  );
};

export default AddOns;
