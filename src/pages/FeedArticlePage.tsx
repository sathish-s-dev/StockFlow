import { newsFeedata } from "@/constants/news-feed";
import { useParams } from "react-router";
import { Helmet } from "react-helmet";
import dayjs from "dayjs";
import { BackButton } from "./StockDetailsPage";
import { cn } from "@/lib/utils/cn";
import SectionHeading from "@/components/ui/SectionHeading";

const FeedArticlePage = () => {
  const { title } = useParams<{ title: string }>();

  // Find the article by title (Ensure title is URL-decoded for proper matching)
  const article = newsFeedata.feed.find(
    (val) => decodeURIComponent(val.title) === title
  );

  if (!article) {
    return (
      <main className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-red-500">Article not found</h1>
      </main>
    );
  }

  return (
    <main className={cn("p-4 pt-0 flex flex-col", "pt-0")}>
      <Helmet>
        <title>{article.title} | News Feed</title>
        <meta name="description" content={article.summary} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.summary} />
        <meta property="og:image" content={article.banner_image} />
        <meta property="og:url" content={article.url} />
      </Helmet>

      <div className="flex items-center gap-4 pb-4">
        <BackButton />
        <SectionHeading title="News Article" className="font-bold text-2xl" />
      </div>

      <div className="gap-6 flex flex-col max-w-screen-md">
        {/* Banner Image */}
        <img
          src={article.banner_image}
          alt={article.title}
          className="rounded-xl shadow-md w-full h-auto"
        />

        {/* Article Title */}
        <h1 className="text-3xl font-bold text-gray-900">{article.title}</h1>

        {/* Article Meta Info */}
        <div className="text-sm text-gray-500">
          <p>
            <span className="font-semibold">Published on:</span>{" "}
            {dayjs(article.time_published).format("MMMM D, YYYY : HH:mm A")}
          </p>
          <p>
            <span className="font-semibold">Author:</span>{" "}
            {article.authors.join(", ")}
          </p>
          <p>
            <span className="font-semibold">Source:</span> {article.source} -{" "}
            {article.source_domain}
          </p>
        </div>

        {/* Summary */}
        <p className="text-lg text-gray-700 leading-relaxed">
          {article.summary}
        </p>

        {/* Topics */}
        {article.topics.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mt-4">Topics Covered:</h3>
            <ul className="list-disc pl-6 text-gray-700">
              {article.topics.map((topic, index) => (
                <li key={index}>
                  {topic.topic} -{" "}
                  <span className="text-gray-500">
                    Relevance: {topic.relevance_score}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Sentiment Analysis */}
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Sentiment Analysis:</h3>
          <p>
            <span className="font-semibold">Overall Sentiment:</span>{" "}
            <span
              className={`px-2 py-1 rounded-md ${
                article.overall_sentiment_label === "Somewhat-Bullish"
                  ? "bg-green-100 text-green-600"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {article.overall_sentiment_label} (
              {article.overall_sentiment_score})
            </span>
          </p>
        </div>

        {/* Ticker Sentiment */}
        {article.ticker_sentiment.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mt-4">Stock Sentiment:</h3>
            <ul className="list-disc pl-6 text-gray-700">
              {article.ticker_sentiment.map((ticker, index) => (
                <li key={index}>
                  <strong>{ticker.ticker}</strong> - Sentiment:{" "}
                  <span
                    className={`px-2 py-1 rounded-md ${
                      ticker.ticker_sentiment_label === "Somewhat-Bullish"
                        ? "bg-green-100 text-green-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {ticker.ticker_sentiment_label} (
                    {ticker.ticker_sentiment_score})
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Read More Link */}
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mt-4 font-semibold"
        >
          Read Full Article ↗
        </a>
      </div>
    </main>
  );
};

export default FeedArticlePage;
