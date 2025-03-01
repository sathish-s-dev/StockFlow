import { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import { motion } from "motion/react";

// const motionVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { type: "spring" } },
// };

const SectionWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      viewport={{ once: true }}
      initial="hidden"
      whileInView="visible"
      className={cn(
        "w-full rounded-md bg-white/20 backdrop-blur-sm dark:bg-dark-foreground xl:p-4 p-2 shadow bg-white",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default SectionWrapper;
