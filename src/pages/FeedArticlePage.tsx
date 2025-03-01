import { newsFeedata } from "@/constants/news-feed";
import { useParams } from "react-router";
import { Helmet } from "react-helmet";
import dayjs from "dayjs";
import { BackButton } from "@/components/BackButton";
import { cn } from "@/lib/utils/cn";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "motion/react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeedArticlePage = () => {
  const { title } = useParams<{ title: string }>();

  const article = newsFeedata.feed.find(
    (val) => decodeURIComponent(val.title) === title
  );

  if (!article) {
    return (
      <main className="flex items-center justify-center h-screen bg-white dark:bg-black">
        <h1 className="text-2xl font-bold text-red-500 dark:text-red-400">
          Article not found
        </h1>
      </main>
    );
  }

  return (
    <motion.main
      className={cn(
        "p-4 pt-0 flex flex-col  text-gray-900 dark:bg-black dark:text-gray-200"
      )}
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      {/* Helmet for SEO */}
      <Helmet>
        <title>{article.title} | News Feed</title>
        <meta name="description" content={article.summary} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.summary} />
        <meta property="og:image" content={article.banner_image} />
        <meta property="og:url" content={article.url} />
      </Helmet>

      <div className="bg-white dark:bg-dark-foreground p-6">
        <motion.div
          className="flex items-center gap-4 pb-4"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          <BackButton />
          <SectionHeading
            title="News Article"
            className="font-bold text-2xl dark:text-gray-100"
          />
        </motion.div>

        <motion.div
          className="gap-6 flex flex-col max-w-screen-md"
          variants={fadeIn}
          transition={{ delay: 0.3 }}
        >
          {/* Banner Image */}
          <motion.img
            src={article.banner_image}
            alt={article.title}
            className="rounded-xl shadow-md w-full h-auto"
            variants={fadeIn}
          />

          {/* Article Title */}
          <motion.h1
            className="text-3xl font-bold text-gray-900 dark:text-gray-100"
            variants={fadeIn}
            transition={{ delay: 0.4 }}
          >
            {article.title}
          </motion.h1>

          {/* Meta Information */}
          <motion.div
            className="text-sm text-gray-500 dark:text-gray-400"
            variants={fadeIn}
            transition={{ delay: 0.5 }}
          >
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
          </motion.div>

          {/* Summary */}
          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
            variants={fadeIn}
            transition={{ delay: 0.6 }}
          >
            {article.summary}
          </motion.p>

          {/* Topics Covered */}
          {article.topics.length > 0 && (
            <motion.div variants={fadeIn} transition={{ delay: 0.7 }}>
              <h3 className="text-xl font-semibold mt-4 dark:text-gray-100">
                Topics Covered:
              </h3>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                {article.topics.map((topic, index) => (
                  <li key={index}>
                    {topic.topic} -{" "}
                    <span className="text-gray-500 dark:text-gray-400">
                      Relevance: {topic.relevance_score}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Sentiment Analysis */}
          <motion.div
            className="mt-4"
            variants={fadeIn}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-xl font-semibold dark:text-gray-100">
              Sentiment Analysis:
            </h3>
            <p>
              <span className="font-semibold">Overall Sentiment:</span>{" "}
              <span
                className={`px-2 py-1 rounded-md ${
                  article.overall_sentiment_label === "Somewhat-Bullish"
                    ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300"
                    : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                }`}
              >
                {article.overall_sentiment_label} (
                {article.overall_sentiment_score})
              </span>
            </p>
          </motion.div>

          {/* Ticker Sentiment */}
          {article.ticker_sentiment.length > 0 && (
            <motion.div variants={fadeIn} transition={{ delay: 0.9 }}>
              <h3 className="text-xl font-semibold mt-4 dark:text-gray-100">
                Stock Sentiment:
              </h3>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                {article.ticker_sentiment.map((ticker, index) => (
                  <li key={index}>
                    <strong>{ticker.ticker}</strong> - Sentiment:{" "}
                    <span
                      className={`px-2 py-1 rounded-md ${
                        ticker.ticker_sentiment_label === "Somewhat-Bullish"
                          ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300"
                          : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                      }`}
                    >
                      {ticker.ticker_sentiment_label} (
                      {ticker.ticker_sentiment_score})
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Read More Link */}
          <motion.a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline mt-4 font-semibold"
            variants={fadeIn}
            transition={{ delay: 1.0 }}
          >
            Read Full Article ↗
          </motion.a>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default FeedArticlePage;
