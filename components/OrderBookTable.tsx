import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Order {
  price: number;
  amount: number;
}

interface OrderBookData {
  bids: Order[];
  asks: Order[];
}

const orderBookData: OrderBookData = {
  bids: [
    { price: 61000, amount: 0.5 },
    { price: 60950, amount: 1.2 },
    // { price: 60900, amount: 2.1 },
    // { price: 60850, amount: 0.8 },
    // { price: 60800, amount: 1.5 },
    // { price: 60750, amount: 0.9 },
    // { price: 60700, amount: 2.3 },
    // { price: 60650, amount: 1.1 },
    // { price: 60600, amount: 0.7 },
    // { price: 60550, amount: 1.8 },
    // { price: 60500, amount: 0.6 },
    // { price: 60450, amount: 1.4 },
    // { price: 60400, amount: 0.9 },
    // { price: 60350, amount: 2.0 },
    // { price: 60300, amount: 1.3 },
  ],
  asks: [
    { price: 61010, amount: 0.8 },
    { price: 61020, amount: 0.3 },
    // { price: 61030, amount: 1.2 },
    // { price: 61040, amount: 0.5 },
    // { price: 61050, amount: 1.7 },
    // { price: 61060, amount: 0.9 },
    // { price: 61070, amount: 1.1 },
    // { price: 61080, amount: 0.4 },
    // { price: 61090, amount: 1.6 },
    // { price: 61100, amount: 0.8 },
    // { price: 61110, amount: 1.0 },
    // { price: 61120, amount: 0.6 },
    // { price: 61130, amount: 1.4 },
    // { price: 61140, amount: 0.7 },
    // { price: 61150, amount: 1.2 },
  ],
};

interface OrderBookTableProps {
  orders: Order[];
  type: 'bids' | 'asks';
  limit?: number;
}

function OrderBookTable({ orders, type, limit = 10 }: OrderBookTableProps) {
  // Sort orders
  const sortedOrders = [...orders].sort((a, b) =>
    type === 'bids' ? b.price - a.price : a.price - b.price
  );

  // Limit the number of orders displayed
  const displayedOrders = sortedOrders.slice(0, limit);

  // Pad with empty rows to reach the limit
  while (displayedOrders.length < limit) {
    displayedOrders.push({ price: 0, amount: 0 });
  }

  // Find best price from actual orders (excluding placeholders)
  const actualOrders = sortedOrders.slice(0, Math.min(limit, sortedOrders.length));
  const bestPrice = actualOrders.length > 0 ? (type === 'bids'
    ? Math.max(...actualOrders.map(o => o.price))
    : Math.min(...actualOrders.map(o => o.price))) : 0;

  const isBids = type === 'bids';

  return (
    <Card className={`w-full shadow-lg rounded-lg bg-white dark:bg-gray-900 border ${isBids ? 'border-green-400 dark:border-green-400 shadow-green-400/20' : 'border-red-400 dark:border-red-400 shadow-red-400/20'} shadow-2xl`}>
      <CardHeader>
        <CardTitle className={`text-center text-xl ${isBids ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
          {isBids ? 'Buy Orders' : 'Sell Orders'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table className="rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-gray-300 border border-gray-400 dark:bg-gray-950 text-black dark:text-white">
              <TableHead className="font-bold">Price</TableHead>
              <TableHead className="font-bold text-center">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {displayedOrders.map((order, index) => (
              <TableRow
                key={index}
                className={`border-b border-x border-gray-400 dark:bg-gray-800 dark:border-gray-700 ${
                  order.price === bestPrice
                    ? isBids
                    ? 'dark:bg-green-900 bg-green-400 dark:text-green-100 font-semibold'
                    : 'dark:bg-red-900 bg-red-400 dark:text-red-100 font-semibold'
                    : ''
                }`}
              >
                <TableCell className="font-mono border-r border-gray-400 dark:border-gray-600 text-black dark:text-white">{order.price ? order.price.toLocaleString() : '--'}</TableCell>
                <TableCell className="font-mono text-center text-black dark:text-white">{order.amount || '--'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export { type Order, type OrderBookData, orderBookData, OrderBookTable };