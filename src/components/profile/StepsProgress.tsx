import { motion } from "motion/react";
import { Step } from "./MultistepFrom";

export function StepProgress({
  steps,
  currentStep,
}: {
  currentStep: number;
  steps: Step[];
}) {
  return (
    <div className="flex w-full justify-between relative isolate">
      {steps.map((step) => (
        <button
          key={step.id}
          className={`flex items-center justify-center shadow size-8 after:ring-2 after:rounded-full dark:text-black transition duration-300  rounded-full after:-inset-1 after:bg-white after:z-[-1] relative after:absolute ${
            step.id <= currentStep ? "bg-emerald-400  after:ring-emerald-400 text-white " : "bg-gray-50 after:ring-white"
          }`}
        >
          {step.id + 1}
        </button>
      ))}
      <div className="absolute top-1/2 left-0 right-0 z-[-2]">
        <div className="relative w-full h-1 bg-gray-200 rounded-full mb-6">
          <motion.div
            className="absolute h-1 bg-emerald-400 rounded-full"
            initial={{ width: "0%" }}
            animate={{
              width: `${(currentStep / steps.length) * 110}%`,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
          />
        </div>
      </div>
    </div>
  );
}
