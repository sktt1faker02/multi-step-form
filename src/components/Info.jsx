import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "yup-phone-lite";
import NextPrevious from "./NextPrevious";

const Info = ({ steps, handleStepNext, currentStep, getSummaryData, summaryDetails }) => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .matches(/^[a-zA-Z\s_]*$/, "Invalid Name")
      .required("This field is required"),
    email: yup.string().email("Invalid email address").required("This field is required"),
    phone: yup.string().phone("US", "Invalid US number").required("This field is required"),
  });

  // (541) 754-3010

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    if (data) {
      getSummaryData({ info: { ...data } });
      handleStepNext();
    }
  };

  const hasPreviousData = Object.prototype.hasOwnProperty.call(summaryDetails[0], "info");

  useEffect(() => {
    if (hasPreviousData) {
      // Populate the form fields with values from prevData
      setValue("name", summaryDetails[0].info.name);
      setValue("email", summaryDetails[0].info.email);
      setValue("phone", summaryDetails[0].info.phone);
    }
  }, [setValue, hasPreviousData, summaryDetails]);

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="step-title">{steps[0].title}</h2>
        <p className="step-description">{steps[0].info}</p>
        <form className="form">
          <div className="input-group">
            <div>
              <label htmlFor="name">Name</label>
              <p className="field-error">{errors.name?.message}</p>
            </div>
            <input className={`${errors.name ? "error" : ""}`} type="text" id="name" placeholder="e.g. Stephen King" {...register("name")} />
          </div>
          <div className="input-group">
            <div>
              <label htmlFor="email">Email Address</label>
              <p className="field-error">{errors.email?.message}</p>
            </div>
            <input className={`${errors.email ? "error" : ""}`} type="email" id="email" placeholder="e.g. stephenking@lorem.com" {...register("email")} />
          </div>
          <div className="input-group">
            <div>
              <label htmlFor="name">Phone Number</label>
              <p className="field-error">{errors.phone?.message}</p>
            </div>
            <input className={`${errors.phone ? "error" : ""}`} type="tel" id="phone" placeholder="e.g. +1 234 567 890" {...register("phone")} />
          </div>
        </form>
      </div>
      <NextPrevious onSubmit={handleSubmit(onSubmit)} currentStep={currentStep} />
    </div>
  );
};

export default Info;
