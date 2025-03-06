import { steps } from "@/config/stepsConfig";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import { ReactNode, useEffect, useState } from "react";
import {
  FieldValues,
  FormProvider,
  useForm,
  useFormContext,
} from "react-hook-form";
import toast from "react-hot-toast";
import { StepProgress } from "./StepsProgress";

// import { formSchema } from "@/schemas/formSchema";
import { useGSAP } from "@gsap/react";
import { z } from "zod";
import { formSchema, StepFormData } from "@/schemas/formSchema";

export interface Step {
  id: number;
  title: string;
  component: ReactNode;
}

export default function MultiStepForm() {
  const storedData = sessionStorage.getItem("formData");
  const defaultValues: StepFormData = storedData
    ? JSON.parse(storedData)
    : {
        firstName: "",
        lastName: "",
        email: "",
        nativeLocation: "",
        currentLocation: "",
        bio: "",
        photo: null,
      };

  const methods = useForm<StepFormData>({
    defaultValues,
    mode: "onBlur",
    resolver: zodResolver(formSchema),
  });

  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = async () => {
    setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  };

  const prevStep = () => setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));

  useGSAP(() => {});

  useEffect(() => {
    const subscription = methods.watch((data) => {
      sessionStorage.setItem("formData", JSON.stringify(data));
    });

    return () => subscription.unsubscribe();
  }, [methods]);

  return (
    <FormProvider {...methods}>
      <div className="w-full max-w-sm relative">
        <ProfileForm
          currentStep={currentStep}
          nextStep={nextStep}
          prevStep={prevStep}
        />
        {/* Background Motion Effects */}
        <motion.div
          animate={{ y: [-300, 300], x: [-30, 30] }}
          transition={{ duration: 20 }}
          className="size-24 bg-emerald-500 absolute z-[-1] top-1/2 -translate-y-1/2 left-0 blur-2xl origin-center"
        />
        <motion.div
          animate={{ y: [300, -300], x: [-30, 30] }}
          transition={{ duration: 20 }}
          className="size-24 bg-red-500 absolute z-[-1] top-1/2 -translate-y-1/2 right-0 blur-2xl origin-center"
        />
      </div>
    </FormProvider>
  );
}

function ProfileForm({
  currentStep,
  nextStep,
  prevStep,
}: {
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
}) {
  const methods = useFormContext();

  const onSubmit = async (data: FieldValues) => {
    console.log("Submitting Data:", data);

    try {
      const parsedData = formSchema.parse(data);
      console.log("Validated Data:", parsedData);
      toast.success("Data submitted successfully!");
      sessionStorage.removeItem("formData");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      }
    }
  };

  return (
    <motion.form
      layout
      onSubmit={methods.handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-6 min-h-[650px] p-6 bg-white/10 backdrop-blur-3xl rounded-lg shadow"
    >
      <h1 className="text-2xl text-center font-semibold">
        User Registration Form
      </h1>

      {/* Step Navigation */}
      <StepProgress currentStep={currentStep} steps={steps} />

      {/* Render Current Step */}
      {steps[currentStep].component}
      {/* <ProfileForm /> */}

      {/* Navigation Buttons */}
      <div className="flex gap-4 justify-between mt-6 w-full">
        <button
          type="button"
          onClick={prevStep}
          className={`py-2 w-full bg-gray-50 border rounded ${
            currentStep === 0
              ? "opacity-50 cursor-not-allowed bg-white"
              : "hover:bg-white bg-white"
          }`}
          disabled={currentStep === 0}
        >
          Back
        </button>
        {currentStep === steps.length - 1 ? (
          <button
            type="submit"
            className="w-full bg-slate-900 text-white rounded hover:bg-slate-900"
          >
            Submit
          </button>
        ) : (
          <button
            type="button"
            onClick={nextStep}
            className="w-full bg-slate-900 text-white rounded hover:bg-slate-900"
          >
            Next
          </button>
        )}
      </div>
    </motion.form>
  );
}
