import { Link } from "react-router";
import SectionHeading from "../ui/SectionHeading";
import { cn } from "@/lib/utils/cn";

export default function SectionTopBar({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <div className={cn("w-full flex items-center justify-between", className)}>
      <SectionHeading title={title} />
      <Link className="text-sm text-blue-600" to="/">
        See All
      </Link>
    </div>
  );
}
