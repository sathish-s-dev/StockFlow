import { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

const SectionWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("w-full rounded-md bg-white xl:p-4 p-2", className)}>
      {children}
    </div>
  );
};

export default SectionWrapper;
