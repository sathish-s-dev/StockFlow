import type { NewsArticle } from "@/types";
import { Link } from "react-router";

interface NewsFeedProps {
  article: NewsArticle;
}

const NewsFeed = ({ article }: NewsFeedProps) => {
  if (!article) return null;

  return (
    <Link
      to={`/feed/${article.title}`}
      className="max-w-xs mx-auto bg-white dark:bg-dark-foreground shadow-md rounded-lg overflow-hidden border border-gray-200/50"
    >
      <img
        src={article.banner_image}
        alt={article.title}
        className="w-full md:h-48 aspect-square object-cover"
      />

      <div className="p-4">
        <h2 className="font-semibold line-clamp-2  dark:text-slate-100 text-gray-900">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {article.title}
          </a>
        </h2>
      </div>
    </Link>
  );
};

export default NewsFeed;
