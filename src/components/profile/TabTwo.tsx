import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/Form";
import { Input } from "../ui/Input";
import { TabWrapper } from "./TabWrapper";

export function TabTwo() {
  const form = useFormContext();
  return (
    <TabWrapper title="Account Details">
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="Enter your email" {...field} />
            </FormControl>
            <FormDescription>This is your username.</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </TabWrapper>
  );
}
