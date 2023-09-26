import arcadeIcon from "./assets/images/icon-arcade.svg";
import advancedIcon from "./assets/images/icon-advanced.svg";
import proIcon from "./assets/images/icon-pro.svg";

export const steps = [
  {
    step: 1,
    title: "Personal info",
    info: "Please provide your name, email address, and phone number.",
    desktopInfo: "Your info",
  },
  {
    step: 2,
    title: "Select your plan",
    info: "You have the option of monthly or yearly billing.",
    desktopInfo: "Select plan",
    plan: [
      {
        type: "arcade",
        month: 9,
        year: 90,
        img: arcadeIcon,
      },
      {
        type: "advanced",
        month: 12,
        year: 120,
        img: advancedIcon,
      },
      {
        type: "pro",
        month: 15,
        year: 150,
        img: proIcon,
      },
    ],
  },
  {
    step: 3,
    title: "Pick add-ons",
    info: "Add-ons help enhance your gaming experience.",
    desktopInfo: "Add-ons",
    addOns: [
      {
        type: "online service",
        month: 1,
        year: 10,
        info: "Access to multiplayer games",
      },
      {
        type: "larger storage",
        month: 2,
        year: 20,
        info: "Extra 1TB of cloud save",
      },
      {
        type: "customizable profile",
        month: 2,
        year: 20,
        info: "Custom theme on your profile",
      },
    ],
  },
  {
    step: 4,
    title: "Finishing up",
    info: "Double-check everything looks OK before confirming.",
    desktopInfo: "Summary",
  },
];
export default steps;
