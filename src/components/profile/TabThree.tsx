import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/Form";
import { Input } from "../ui/Input";
import { TabWrapper } from "./TabWrapper";

export function TabThree() {
  const { control, formState } = useFormContext();
  return (
    <TabWrapper title="Location">
      <FormField
        control={control}
        name="currentLocation"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Current Location</FormLabel>
            <FormControl>
              <Input placeholder="Enter your  current location" {...field} />
            </FormControl>
            {/* <FormDescription>This is your public display name.</FormDescription> */}
            {/* <FormMessage /> */}
            {formState.errors.currentLocation && (
              <FormMessage>
                {JSON.stringify(formState.errors.currentLocation)}
              </FormMessage>
            )}
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="nativeLocation"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Native Location</FormLabel>
            <FormControl>
              <Input placeholder="Enter your native location" {...field} />
            </FormControl>
            {/* <FormDescription>This is your public display name.</FormDescription> */}
            <FormMessage />
          </FormItem>
        )}
      />
    </TabWrapper>
  );
}

// interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
//   field?: ControllerRenderProps<FieldValues, string>;
//   className?: string;
//   type?: string;
// }

// // export function FormInput({
// //   field,
// //   className,
// //   type,
// //   ...props
// // }: FormInputProps) {
// //   return (
// //     <input
// //       type={type || "text"}
// //       {...props}
// //       {...field}
// //       className={cn(
// //         "rounded-[10px] border focus:outline outline-2 outline-[#FEBF00] bg-transparent border-slate-900 dark:border-slate-50 px-4 py-2 transition duration-200 focus:outline-offset-5 ",
// //         className
// //       )}
// //     />
// //   );
// // }
