import { Link } from "react-router";
import SectionHeading from "../ui/SectionHeading";
import { cn } from "@/lib/utils/cn";

interface SectionTopbarProps {
  title: string;
  className?: string;
}

export function SectionTopbar({ title, className }: SectionTopbarProps) {
  return (
    <div className={cn("w-full flex items-center justify-between", className)}>
      <SectionHeading title={title} />
      <Link className="text-sm text-orange-400" to="/">
        See All
      </Link>
    </div>
  );
}
