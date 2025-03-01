import FeedCard from "@/components/news-feed/FeedCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { newsFeedata } from "@/constants/news-feed";
import { BackButton } from "@/components/BackButton";
import { motion } from "motion/react";
import SectionWrapper from "@/components/ui/SectionWrapper";

const variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
    },
  },
};

const NewsFeedPage = () => {
  return (
    <main className="w-full  px-4 pb-4">
      <SectionWrapper className="w-full ">
        <div className="flex items-center gap-4 pb-4">
          <BackButton />
          <SectionHeading title="News Feed" className="font-bold text-2xl" />
        </div>
        <motion.div
          variants={variants}
          initial="initial"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-4 gap-4"
        >
          {newsFeedata.feed.slice(0, 10).map((news) => {
            return <FeedCard article={news} />;
          })}
        </motion.div>
      </SectionWrapper>
    </main>
  );
};

export default NewsFeedPage;
