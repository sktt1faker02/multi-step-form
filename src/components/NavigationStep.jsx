import steps from "../data";

const NavigationStep = () => {
  return (
    <aside>
      {steps.map((stepInfo) => {
        // const { step, title, info, desktopInfo } = stepInfo;
        const { step } = stepInfo;

        return (
          <div className="nav-step-container" key={step}>
            <button className="btn btn-nav">{step}</button>
            <div className="nav-info">
              {/* <span></span> label for desktop/}
                {/* <span></span> label for desktop */}
            </div>
          </div>
        );
      })}
    </aside>
  );
};

export default NavigationStep;
