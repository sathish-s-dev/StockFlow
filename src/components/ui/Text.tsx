import { cn } from "@/lib/utils/cn";
import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  className?: string;
}

const Text = ({ children, className }: TextProps) => {
  return (
    <p className={cn("text-dark-foreground dark:text-white", className)}>
      {children}
    </p>
  );
};

export default Text;
