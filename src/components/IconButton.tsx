import { cn } from "@/lib/utils/cn";

export function IconButton({
  handleClick,
  className,
  children,
}: {
  handleClick: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      onClick={handleClick}
      className={cn(
        "flex items-center rounded-full justify-center size-9 flex-shrink-0 bg-white shadow-xl",
        className
      )}
    >
      {children}
    </button>
  );
}
