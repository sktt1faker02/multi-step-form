const NextPrevious = ({ onSubmit, currentStep, handleGoBack }) => {
  const handleNextStep = (e) => {
    e.preventDefault();
    onSubmit();
  };

  const handleBack = () => {
    handleGoBack();
  };

  console.log(currentStep);

  return (
    <div className="btn-step-container">
      {currentStep !== 1 && (
        <button className="btn btn-back" onClick={handleBack}>
          Go Back
        </button>
      )}
      <button onClick={handleNextStep} className="btn btn-next">
        Next Step
      </button>
    </div>
  );
};

export default NextPrevious;
