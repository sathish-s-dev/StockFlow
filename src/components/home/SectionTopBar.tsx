import { Link } from "react-router";
import SectionHeading from "../ui/SectionHeading";

export default function SectionTopBar({ title }: { title: string }) {
  return (
    <div className="w-full flex items-center justify-between">
      <SectionHeading title={title} />
      <Link className="text-sm text-blue-600" to="/">
        See All
      </Link>
    </div>
  );
}
