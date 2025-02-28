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
    <div
      className={cn(
        "w-full rounded-md bg-white/20 backdrop-blur-sm dark:bg-dark-foreground xl:p-4 p-2 shadow bg-white",
        className
      )}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
