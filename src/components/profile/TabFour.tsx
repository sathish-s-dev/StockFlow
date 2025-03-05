import { useFormContext, Controller } from "react-hook-form";
import { TabWrapper } from "./TabWrapper";
import { FormInput } from "./TabThree";

export function TabFour() {
  const { control, watch, setValue, formState } = useFormContext();
  const photo = watch("photo");

  return (
    <TabWrapper title="Upload Photo">
      {/* File Upload */}
      <div>
        <Controller
          name="photo"
          control={control}
          render={() => (
            <label className="cursor-pointer px-4 py-2 bg-emerald-500 text-white font-medium rounded-lg shadow-md hover:bg-emerald-600 transition duration-300">
              Choose File
              <FormInput
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    setValue("photo", e.target.files[0], {
                      shouldValidate: true,
                    });
                  }
                }}
              />
            </label>
          )}
        />

        {/* ✅ Display Validation Errors */}
        {formState.errors.photo && (
          <p className="text-red-500">
            {JSON.stringify(formState.errors.photo.message)}
          </p>
        )}

        {/* Show Image Preview */}
        {photo instanceof File && (
          <div className="mt-4 flex justify-center">
            <img
              src={URL.createObjectURL(photo)}
              alt="Uploaded Preview"
              className="object-cover shadow max-h-60 w-full"
            />
          </div>
        )}
      </div>
    </TabWrapper>
  );
}
