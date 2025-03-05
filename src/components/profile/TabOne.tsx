import { Controller, useFormContext } from "react-hook-form";
import { TabWrapper } from "./TabWrapper";
import { FormInput } from "./TabThree";

export function TabOne() {
  const { control } = useFormContext();
  return (
    <TabWrapper title="Personal Info">
      <Controller
        name="firstName"
        control={control}
        render={({ field }) => (
          <FormInput type="text" placeholder="First Name" {...field} />
        )}
      />
      <Controller
        name="lastName"
        control={control}
        render={({ field }) => (
          <FormInput type="text" placeholder="Last Name" {...field} />
        )}
      />
    </TabWrapper>
  );
}
