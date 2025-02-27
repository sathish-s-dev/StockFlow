import { IconButton } from "@/components/IconButton";
import router from "@/router";
import { ChevronLeft } from "react-feather";

export function BackButton() {
  return (
    <IconButton handleClick={() => router.navigate(-1)}>
      <ChevronLeft />
    </IconButton>
  );
}
