import {
  useFormContext,
  Controller,
  ControllerRenderProps,
  FieldValues,
} from "react-hook-form";
import { TabWrapper } from "./TabWrapper";
import { cn } from "@/lib/utils/cn";

export function TabThree() {
  const { control } = useFormContext();
  return (
    <TabWrapper title="Location">
      <Controller
        name="nativeLocation"
        control={control}
        render={({ field }) => (
          <FormInput
            type="text"
            field={field}
            placeholder="Native Location"
            autoComplete="native-location"
            required
          />
        )}
      />
      <Controller
        name="currentLocation"
        control={control}
        render={({ field }) => (
          <FormInput
            type="text"
            field={field}
            placeholder="Current Location"
            autoComplete="current-location"
            required
          />
        )}
      />
    </TabWrapper>
  );
}

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  field?: ControllerRenderProps<FieldValues, string>;
  className?: string;
  type?: string;
}

export function FormInput({
  field,
  className,
  type,
  ...props
}: FormInputProps) {
  return (
    <input
      type={type || "text"}
      {...props}
      {...field}
      className={cn(
        "rounded-[10px] border focus:outline outline-2 outline-[#FEBF00] bg-transparent border-slate-900 dark:border-slate-50 px-4 py-2 transition duration-200 focus:outline-offset-5 ",
        className
      )}
    />
  );
}
