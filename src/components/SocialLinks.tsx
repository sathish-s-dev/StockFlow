import socialLinksConfig from "@/config/socialLinksConfig";
import { Link } from "react-router";

const SocialLinks = () => {
  return (
    <ul className="mt-8 flex gap-6">
      {socialLinksConfig.map((link) => (
        <li key={link.name}>
          <Link
            to={link.url}
            rel="noreferrer"
            target="_blank"
            className="text-gray-200 transition hover:opacity-75"
          >
            <span className="sr-only">{link.name}</span>
            {link.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
