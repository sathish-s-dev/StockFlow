import { ReactNode } from "react";


export function TabWrapper({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      {children}
    </div>
  );
}