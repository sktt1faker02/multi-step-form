import NextPrevious from "./NextPrevious";

import { useState } from "react";

const Plan = ({ steps, handleStepNext, getSummaryData, currentStep, handleGoBack }) => {
  const [selectedPlan, setSelectedPlan] = useState(steps[1].plan[0].type);
  const [billingType, setBillingType] = useState("monthly");

  console.log(selectedPlan);

  const handlePlanClick = (planType) => {
    setSelectedPlan(planType);
  };

  const handleBillingToggle = () => {
    // Toggle between Monthly and Yearly when the billing toggle is clicked
    setBillingType(billingType === "monthly" ? "yearly" : "monthly");
  };

  const handleSubmit = () => {
    handleStepNext();
    const planPriceFilter = steps[1].plan.filter((plan) => plan.type === selectedPlan);
    const billType = billingType === "yearly" ? "year" : "month";
    const planPrice = planPriceFilter[0][`${billType}`];
    getSummaryData({ plan: selectedPlan, bill: billingType, planPrice: planPrice });
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="step-title">{steps[1].title}</h2>
        <p className="step-description">{steps[1].info}</p>
        <form className="form">
          <div className="plans">
            {steps[1].plan.map((plan, id) => {
              return (
                <div className={`plan ${selectedPlan === plan.type ? "selected" : ""}`} key={id} onClick={() => handlePlanClick(plan.type)}>
                  <input type="radio" id={plan.type} />
                  <label htmlFor={plan.type} className={billingType === "yearly" ? "plan-icon-yearly" : ""}>
                    <img src={plan.img} alt={plan.type} />
                  </label>
                  <div className="details">
                    <h4>{plan.type}</h4>
                    <p>{`$${billingType === "yearly" ? plan.year + "/yr" : plan.month + "/mo"}`}</p>
                    {billingType === "yearly" && <p className="freebie">2 months free</p>}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="billing">
            <label htmlFor="toggle-month" className={billingType === "monthly" ? "active" : ""}>
              Monthly
            </label>
            <div className="toggle">
              <input type="checkbox" id="toggle-billing" checked={billingType === "yearly"} onChange={handleBillingToggle} />
              <label htmlFor="toggle-billing"></label>
            </div>
            <label id="toggle-year" className={billingType === "yearly" ? "active" : ""}>
              Yearly
            </label>
          </div>
        </form>
      </div>
      <NextPrevious onSubmit={handleSubmit} currentStep={currentStep} handleGoBack={handleGoBack} />
    </div>
  );
};

export default Plan;
