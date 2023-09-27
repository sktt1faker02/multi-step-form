const NextPrevious = ({ onSubmit, currentStep, handleGoBack, onBack }) => {
  const handleNextStep = (e) => {
    e.preventDefault();

    onSubmit();
  };

  const handleBack = () => {
    if (currentStep !== 4) {
      onBack();
    }
    handleGoBack();
  };

  // console.log(currentStep);

  return (
    <div className="btn-step-container">
      {currentStep !== 1 && (
        <button className="btn btn-back" onClick={handleBack}>
          Go Back
        </button>
      )}
      <button onClick={handleNextStep} className={`btn btn-next ${currentStep === 4 ? "confirm" : ""}`}>
        {currentStep === 4 ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
};

export default NextPrevious;
