import successIcon from "../assets/images/icon-thank-you.svg";

const Success = () => {
  return (
    <div className="container">
      <div className="success form-container">
        <img src={successIcon} alt="success" />
        <h2>Thank you!</h2>
        <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
      </div>
    </div>
  );
};

export default Success;
