import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Alert {
  id: number
  crypto: string
  price: string
  exchange: string
  pair: string
  active: boolean
}

interface AlertListProps {
  alerts: Alert[]
}

export default function AlertList({ alerts }: AlertListProps) {
  return (
    <Card className="border border-gray-200 shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Alerts</h3>
          <Button variant="link" className="text-orange-500 p-0">
            Add alert
          </Button>
        </div>

        <div className="space-y-4">
          {alerts.map((alert) => (
            <div key={alert.id} className="flex items-center gap-4 py-2 border-b last:border-0">
              <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-yellow-500"
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
                    d="M12 8V12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 16H12.01"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <div className="font-medium">
                  1 {alert.crypto} &lt; {alert.price}
                </div>
                <div className="text-xs text-gray-500">
                  {alert.exchange} | {alert.pair}
                </div>
              </div>
              <div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked={alert.active} className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                </label>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

