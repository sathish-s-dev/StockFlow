import { CandlestickData } from "@/types";
import dayjs from "dayjs";

const formatCandlestickData = (item: CandlestickData): CandlestickData => {
  return {
    ...item,
    date: dayjs(item.date).format("MM-DD"),
  };
};

export default formatCandlestickData;
