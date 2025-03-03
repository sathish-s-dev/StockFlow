import type { CandlestickData } from "@/types";

function generateCandlestickData(
  startPrice = 100,
  days = 30
): CandlestickData[] {
  const data = [];
  let currentPrice = startPrice;
  const date = new Date(); // Start from today

  for (let i = 0; i < days; i++) {
    // Simulate daily price movement
    const open = currentPrice;
    const high = open + Math.random() * 5; // High slightly higher
    const low = open - Math.random() * 5; // Low slightly lower
    const close = low + Math.random() * (high - low); // Close within range

    currentPrice = close; // Carry forward closing price

    data.unshift({
      // Insert at the beginning to keep order
      date: date.toISOString().split("T")[0], // Format as YYYY-MM-DD
      open: parseFloat(open.toFixed(2)) + "",
      high: parseFloat(high.toFixed(2)) + "",
      low: parseFloat(low.toFixed(2)) + "",
      close: parseFloat(close.toFixed(2)) + "",
      volume: Math.floor(Math.random() * 1000000) + "", // Simulate volume
    });

    date.setDate(date.getDate() - 1); // Move to the previous day
  }

  return data;
}

// Example Usage
console.log(generateCandlestickData(150, 10)); // Generate 10 days of data

export default generateCandlestickData;
