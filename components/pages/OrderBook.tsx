import { OrderBookTable, orderBookData } from "@/components/OrderBookTable";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function OrderBook() {
  return (
    <div className="min-h-screen p-4 sm:p-8 relative bg-gray-100 dark:bg-black">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <h1 className="text-2xl font-bold text-center mb-8 text-black dark:text-white">Order Book</h1>
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-start">
        <OrderBookTable orders={orderBookData.bids} type="bids" />
        <OrderBookTable orders={orderBookData.asks} type="asks" />
      </div>
    </div>
  );
}