import { motion } from "motion/react";
import { Step } from "./MultistepFrom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export function StepProgress({
  steps,
  currentStep,
}: {
  currentStep: number;
  steps: Step[];
}) {
  return (
    <motion.div className="flex w-full justify-between relative isolate">
      {steps.map((step) => (
        <motion.button
          key={step.id}
          type="button"
          className={`flex items-center justify-center size-7 after:ring-4 after:shadow-lg after:shadow-white ring-red-500 after:rounded-full dark:text-white  transition duration-300  rounded-full after:-inset-1 after:bg-white after:z-[-1] relative after:absolute ${
            step.id <= currentStep
              ? "bg-sky-600 dark:bg-gradient-to-b from-red-400 to-red-400  after:ring-sky-600 dark:after:ring-white text-white "
              : "bg-gray-50 after:ring-white dark:text-slate-800"
          }`}
        >
          <p className="absolute z-10">{step.id + 1}</p>
        </motion.button>
      ))}
      <div className="absolute top-1/2 left-0 right-0 z-[-2]">
        <div className="relative w-full h-1 bg-gray-200 rounded-full mb-6">
          <motion.div
            className="absolute h-1 bg-sky-600 dark:bg-gradient-to-tr from-orange-400 to-red-400 rounded-full"
            initial={{ width: "0%" }}
            animate={{
              width: `${(currentStep / steps.length) * 110}%`,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
          />
        </div>
      </div>
    </motion.div>
  );
}
