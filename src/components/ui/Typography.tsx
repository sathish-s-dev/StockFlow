// import React, { ReactNode } from "react";

// // Define the types of typography variants
// const variants = {
//   h1: "text-6xl font-bold",
//   h2: "text-5xl font-bold",
//   h3: "text-4xl font-bold",
//   h4: "text-3xl font-bold",
//   h5: "text-2xl font-bold",
//   h6: "text-xl font-bold",
//   subtitle1: "text-lg font-semibold",
//   subtitle2: "text-base font-semibold",
//   body1: "text-base",
//   body2: "text-sm",
//   caption: "text-xs",
//   overline: "text-xs uppercase tracking-wide",
// };

// // Define the valid HTML tags
// type ValidTags = keyof JSX.IntrinsicElements;

// // Define the props for the Typography component
// interface TypographyProps {
//   variant?: keyof typeof variants; // Variant type
//   tag?: ValidTags; // HTML tag type
//   children: ReactNode; // Content inside the typography
//   className?: string; // Additional classes
// }

// const Typography: React.FC<TypographyProps> = ({
//   variant = "body1", // Default variant
//   tag: Tag = "div", // Default tag
//   children,
//   className = "",
//   ...props
// }) => {
//   // Get the Tailwind classes for the selected variant
//   const variantClasses = variants[variant] || variants.body1;

//   return (
//     <Tag className={`${variantClasses} ${className}`} {...props}>
//       {children}
//     </Tag>
//   );
// };

// export default Typography;