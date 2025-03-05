import { motion } from "motion/react";
import { Step } from "./MultistepFrom";

const stepVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export function StepProgress({
  steps,
  currentStep,
}: {
  currentStep: number;
  steps: Step[];
}) {
  return (
    <motion.div
      variants={stepVariants}
      initial="hidden"
      animate="visible"
      className="flex w-full justify-between relative isolate"
    >
      {steps.map((step) => (
        <motion.button
          variants={buttonVariants}
          whileHover={{ scale: 1.1 }}
          key={step.id}
          className={`flex items-center justify-center size-7 after:ring-4 after:shadow-md after:shadow-red-500 ring-red-500 after:rounded-full dark:text-black transition duration-300  rounded-full after:-inset-1 after:bg-white after:z-[-1] relative after:absolute ${
            step.id <= currentStep
              ? "bg-slate-700  after:ring-slate-700 text-white "
              : "bg-gray-50 after:ring-white"
          }`}
        >
          <p className="absolute z-10">{step.id + 1}</p>
        </motion.button>
      ))}
      <div className="absolute top-1/2 left-0 right-0 z-[-2]">
        <div className="relative w-full h-1 bg-gray-200 rounded-full mb-6">
          <motion.div
            className="absolute h-1 bg-slate-900 rounded-full"
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
