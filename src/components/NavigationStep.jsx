const NavigationStep = ({ steps, currentStep }) => {
  if (currentStep === 5) {
    currentStep = 4;
  }

  return (
    <aside>
      {steps.map((stepInfo, index) => {
        // const { step, title, info, desktopInfo } = stepInfo;
        const { step, desktopInfo } = stepInfo;

        return (
          <div className="nav-step-container" key={step}>
            <button className={`btn btn-nav ${currentStep === index + 1 ? "active" : ""}`}>{step}</button>
            <div className="nav-info">
              <span>{`step ${step}`}</span>
              <p>{desktopInfo}</p>
            </div>
          </div>
        );
      })}
    </aside>
  );
};

export default NavigationStep;
