import FeedCard from "@/components/news-feed/FeedCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { newsFeedata } from "@/constants/news-feed";
import { BackButton } from "@/components/BackButton";
import { motion } from "motion/react";

const NewsFeedPage = () => {
  return (
    <main className="w-full  px-4 pb-4">
      <div className="flex items-center gap-4 pb-4">
        <BackButton />
        <SectionHeading title="News Feed" className="font-bold text-2xl" />
      </div>
      <motion.div className="grid md:grid-cols-4 gap-4">
        {newsFeedata.feed.slice(0, 10).map((news) => {
          return <FeedCard article={news} />;
        })}
      </motion.div>
    </main>
  );
};

export default NewsFeedPage;
