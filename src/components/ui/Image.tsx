import { cn } from "@/lib/utils/cn";
import { ImgHTMLAttributes } from "react";

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  className?: string;
  loading?: "eager" | "lazy";
};

const Image = ({ className, loading = "lazy", ...props }: ImageProps) => {
  return (
    <img
      loading={loading}
      {...props}
      className={cn("w-full h-full object-cover", className)}
    />
  );
};

export default Image;
