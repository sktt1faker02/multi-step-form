import NextPrevious from "./NextPrevious";

const Summary = ({ summaryDetails, currentStep, handleGoBack }) => {
  const billType = summaryDetails[0].bill === "yearly" ? "yr" : "mo";

  let totalAmount = summaryDetails[0].planPrice;

  if (summaryDetails[0].addons.length > 0) {
    summaryDetails[0].addons.map((adds) => {
      totalAmount += adds[billType === "yr" ? "year" : "month"];
    });
  }

  console.log(summaryDetails);
  return (
    <div className="container">
      <section className="summary form-container">
        <h2 className="step-title">Finishing up</h2>
        <p className="step-description">Double-check everything looks OK before confirming.</p>
        <div className="summary-details">
          <div className={`summary-detail-plan ${summaryDetails[0].addons.length > 0 ? "addon-line" : ""}`}>
            <div className="title">
              <h3>{`${summaryDetails[0].plan} (${summaryDetails[0].bill})`}</h3>
              <a href="#">Change</a>
            </div>
            <p className="price">{`$${summaryDetails[0].planPrice}/${billType}`}</p>
          </div>
          <div className={`summary-addons ${summaryDetails[0].addons.length < 1 ? "addons-list" : ""}`}>
            {summaryDetails[0].addons.length > 0 &&
              summaryDetails[0].addons.map((adds, i) => {
                return (
                  <div className="add-on" key={i}>
                    <p className="add-on-title">{adds.type}</p>
                    <p className="add-on-price">{`+$${adds[billType === "yr" ? "year" : "month"]}/${billType}`}</p>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="summary-total">
          <p>{`Total (per ${billType === "yr" ? "year" : "month"})`}</p>
          <p className="total-price">{`$${totalAmount}/${billType}`}</p>
        </div>
      </section>
      <NextPrevious currentStep={currentStep} handleGoBack={handleGoBack} />
    </div>
  );
};

export default Summary;
