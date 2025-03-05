import { useFormContext, Controller } from "react-hook-form";
import { TabWrapper } from "./TabWrapper";
import { FormInput } from "./TabThree";

export function TabTwo() {
  const { control } = useFormContext();
  return (
    <TabWrapper title="Account Details">
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <FormInput
            type="email"
            placeholder="Enter your email"
            {...field}
            className="rounded-[10px] border focus:outline outline-2 outline-[#FEBF00] bg-transparent border-slate-900 dark:border-slate-50 px-4 py-2 transition duration-200 focus:outline-offset-5 "
          />
        )}
      />
    </TabWrapper>
  );
}
