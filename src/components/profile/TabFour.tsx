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

import { useEffect, useState } from "react";

export function TabFour() {
  const { control, watch, setValue, formState } = useFormContext();
  const photo = watch("photo");
  const [photoURL, setPhotoURL] = useState<string>("");

  useEffect(() => {
    if (photo instanceof File) {
      const url = URL.createObjectURL(photo);
      setPhotoURL(url);
      return () => {
        URL.revokeObjectURL(url);
        setPhotoURL("");
      };
    } else {
      setPhotoURL("");
    }
  }, [photo]);

  return (
    <TabWrapper title="Upload Photo">
      <div>
        <FormField
          control={control}
          name="photo"
          render={({ field: { ref } }) => (
            <FormItem>
              <FormLabel className="bg-slate-800 px-8 py-3 rounded hover:cursor-pointer block text-white max-w-fit">
                Select Photo
              </FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  ref={ref}
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    setValue("photo", file);
                  }}
                />
              </FormControl>
              {formState.errors.photo && (
                <FormMessage>
                  {JSON.stringify(formState.errors.photo)}
                </FormMessage>
              )}
            </FormItem>
          )}
        />
        {photoURL && (
          <div className="mt-4 flex justify-center">
            <img
              src={photoURL}
              alt="Uploaded Preview"
              className="object-cover shadow max-h-60 w-full"
            />
          </div>
        )}
      </div>
    </TabWrapper>
  );
}
