import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";
import { stocks } from "@/constants/stocks";
import { useState } from "react";
import { Bookmark } from "react-feather";
import { Link } from "react-router";

export default function StocksTable() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          {!isMobile && (
            <>
              <TableHead className="">Balance</TableHead>
              <TableHead className="">Watchlist</TableHead>
            </>
          )}
          <TableHead className="text-right"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {stocks.map((stock) => (
          <TableRow key={stock.exchangeShortName}>
            <TableCell className="font-medium">
              <Link
                to={`/stock/${stock.exchangeShortName}`}
                className="flex items-center gap-2"
              >
                <img
                  src="https://images.financialmodelingprep.com/symbol/AAL.png"
                  className="w-10"
                />
                {stock.name}
              </Link>
            </TableCell>
            <TableCell>{stock.price}</TableCell>
            {!isMobile && (
              <>
                <TableCell className="">201,01</TableCell>
                <TableCell className="">
                  <button>
                    <Bookmark size={16} />
                  </button>
                </TableCell>
              </>
            )}
            <TableCell className="text-right">
              <button className="px-3 py-1 border rounded-full">
                Get Started
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
