import { cn } from "@/lib/utils/cn";

type SectionHeadingProps = {
  title: string;
  className?: string;
};

const SectionHeading = ({ title, className }: SectionHeadingProps) => {
  return (
    <h1
      className={cn(
        "text-lg font-semibold text-gray-800 dark:text-white",
        className
      )}
    >
      {title}
    </h1>
  );
};

export default SectionHeading;
