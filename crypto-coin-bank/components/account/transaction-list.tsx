import { Card, CardContent } from "@/components/ui/card"

interface Transaction {
  id: number
  type: "deposit" | "withdraw"
  date: string
  amount: string
  crypto: string
}

interface TransactionListProps {
  transactions: Transaction[]
  coinName: string
}

export default function TransactionList({ transactions, coinName }: TransactionListProps) {
  return (
    <Card className="border border-gray-200 shadow-sm">
      <CardContent className="p-6">
        <h3 className="text-lg font-medium mb-4">Transaction</h3>

        <div className="space-y-4">
          {transactions.map((tx) => (
            <div key={tx.id} className="flex items-center gap-4 py-2 border-b last:border-0">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  tx.type === "deposit" ? "bg-orange-100" : "bg-gray-100"
                }`}
              >
                {tx.type === "deposit" ? (
                  <svg
                    className="w-4 h-4 text-orange-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 16V8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 12L12 8L16 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-gray-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 8V16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 12L12 16L16 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              <div className="flex-1">
                <div className="font-medium">
                  {tx.type === "deposit" ? `Deposit ${coinName}` : `Withdraw ${coinName}`}
                </div>
                <div className="text-xs text-gray-500">{tx.date}</div>
              </div>
              <div className="text-right">
                <div className={tx.type === "deposit" ? "text-orange-500" : "text-red-500"}>{tx.crypto}</div>
                <div className="text-sm">{tx.amount}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

