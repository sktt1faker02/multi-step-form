import successIcon from "../assets/images/icon-thank-you.svg";

const Success = () => {
  return (
    <div className="success">
      <img src={successIcon} alt="success" />
      <h2>Thank you!</h2>
      <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </div>
  );
};

export default Success;
