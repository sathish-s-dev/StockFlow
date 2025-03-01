import { IconButton } from "@/components/IconButton";
import router from "@/router";
import { ChevronLeft } from "react-feather";

export function BackButton() {
  return (
    <IconButton className="text-black" handleClick={() => router.navigate(-1)}>
      <ChevronLeft />
    </IconButton>
  );
}
