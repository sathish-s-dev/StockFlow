import { useState } from "react";
import { motion } from "motion/react";

const steps = [
  {
    id: 1,
    title: "Step 1",
    description: "Description 1",
  },
  {
    id: 2,
    title: "Step 2",
    description: "Description 2",
  },
  {
    id: 3,
    title: "Step 3",
    description: "Description 3",
    disabled: true,
    onClick: () => {
      if (window.confirm("Are you sure?")) {
        alert("Confirmed!");
      }
    },
  },
];

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);

  console.log((currentStep / steps.length) * 110);

  const nextStep = () =>
    setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  const prevStep = () => setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));

  return (
    <div className="max-w-lg mx-auto h-full min-h-[400px] w-full mt-10 p-6 bg-white shadow-lg rounded-lg">
      <div className="flex w-full justify-between relative isolate">
        {steps.map((step) => (
          <button
            key={step.id}
            className={`flex items-center justify-center w-10 h-10 rounded-full ${
              step.id <= currentStep ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {step.id}
          </button>
        ))}
        <div className="absolute top-1/2 left-0 right-0 z-[-1]">
          <div className="relative w-full h-1 bg-gray-200 rounded-full mb-6">
            <motion.div
              className="absolute h-1 bg-blue-500 rounded-full"
              initial={{ width: "0%" }}
              animate={{
                width: `${(currentStep / steps.length) * 110}%`,
              }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
            />
          </div>
        </div>
      </div>
      {/* Progress Bar */}

      {/* Step Content */}
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
      >
        {currentStep === 0 && <StepOne />}
        {currentStep === 1 && <StepTwo />}
        {currentStep === 2 && <StepThree />}
      </motion.div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={prevStep}
          className={`px-4 py-2 bg-gray-300 rounded ${
            currentStep === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-400"
          }`}
          disabled={currentStep === 0}
        >
          Back
        </button>
        <button
          onClick={nextStep}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {currentStep === steps.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}

function StepOne() {
  return (
    <div className="text-center">
      {" "}
      <h2 className="text-xl font-semibold">Personal Info</h2>{" "}
      <p>Enter your personal details.</p>
    </div>
  );
}

function StepTwo() {
  return (
    <div className="text-center">
      {" "}
      <h2 className="text-xl font-semibold">Account Details</h2>{" "}
      <p>Set up your account credentials.</p>
    </div>
  );
}

function StepThree() {
  return (
    <div className="text-center">
      {" "}
      <h2 className="text-xl font-semibold">Confirmation</h2>{" "}
      <p>Review your information before submission.</p>
    </div>
  );
}
