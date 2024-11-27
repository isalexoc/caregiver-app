import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function MarketAnalysis() {
  return (
    <section className="mb-12 p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
        Market Analysis
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
          <CardHeader className="bg-blue-500 text-white">
            <CardTitle className="text-2xl">Aging Population Trend</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="w-full h-64 relative">
              <svg
                className="w-full h-full"
                viewBox="0 0 400 200"
                preserveAspectRatio="none"
              >
                <path d="M0,200 L400,200" stroke="#e2e8f0" strokeWidth="2" />
                <path
                  d="M0,150 L400,150"
                  stroke="#e2e8f0"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                />
                <path
                  d="M0,100 L400,100"
                  stroke="#e2e8f0"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                />
                <path
                  d="M0,50 L400,50"
                  stroke="#e2e8f0"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                />
                <path d="M0,0 L400,0" stroke="#e2e8f0" strokeWidth="2" />

                <path
                  d="M0,166 L200,164 L400,156"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  fill="none"
                  className="trend-line"
                />
                <path
                  d="M0,184 L200,180 L400,150"
                  stroke="#10b981"
                  strokeWidth="3"
                  fill="none"
                  className="trend-line"
                />

                <circle cx="0" cy="166" r="4" fill="#3b82f6" />
                <circle cx="200" cy="164" r="4" fill="#3b82f6" />
                <circle cx="400" cy="156" r="4" fill="#3b82f6" />

                <circle cx="0" cy="184" r="4" fill="#10b981" />
                <circle cx="200" cy="180" r="4" fill="#10b981" />
                <circle cx="400" cy="150" r="4" fill="#10b981" />

                <text x="0" y="220" fill="#4b5563" fontSize="12">
                  2022
                </text>
                <text x="200" y="220" fill="#4b5563" fontSize="12">
                  2024
                </text>
                <text x="400" y="220" fill="#4b5563" fontSize="12">
                  2050
                </text>
              </svg>
              <div className="absolute top-0 left-0 p-4 bg-white bg-opacity-75 rounded-br-lg">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                  <span className="text-sm text-gray-600">National</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm text-gray-600">Stafford County</span>
                </div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  National trend:
                </h3>
                <ul className="list-none space-y-1 text-sm">
                  <li className="flex justify-between">
                    <span>2022:</span>{" "}
                    <span className="font-medium">17.3%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>2024:</span> <span className="font-medium">18%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>2050:</span> <span className="font-medium">22%</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  Stafford County trend:
                </h3>
                <ul className="list-none space-y-1 text-sm">
                  <li className="flex justify-between">
                    <span>2022:</span> <span className="font-medium">8%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>2024:</span> <span className="font-medium">10%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>2050:</span> <span className="font-medium">25%</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
          <CardHeader className="bg-purple-500 text-white">
            <CardTitle className="text-2xl">Market Opportunity</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="w-full h-64 relative">
              <svg className="w-full h-full" viewBox="0 0 400 200">
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#6d28d9" />
                  </linearGradient>
                </defs>
                <rect
                  x="50"
                  y="20"
                  width="100"
                  height="160"
                  fill="url(#barGradient)"
                  className="market-bar"
                />
                <rect
                  x="250"
                  y="20"
                  width="100"
                  height="160"
                  fill="#e2e8f0"
                  className="market-bar"
                />
                <text
                  x="100"
                  y="200"
                  textAnchor="middle"
                  fill="#4b5563"
                  fontSize="14"
                >
                  Current
                </text>
                <text
                  x="300"
                  y="200"
                  textAnchor="middle"
                  fill="#4b5563"
                  fontSize="14"
                >
                  Potential
                </text>
                <text
                  x="100"
                  y="15"
                  textAnchor="middle"
                  fill="#4b5563"
                  fontSize="14"
                  fontWeight="bold"
                >
                  30%
                </text>
                <text
                  x="300"
                  y="15"
                  textAnchor="middle"
                  fill="#4b5563"
                  fontSize="14"
                  fontWeight="bold"
                >
                  70%
                </text>
              </svg>
            </div>
            <p className="mt-6 text-gray-700 dark:text-gray-300">
              There&apos;s a significant opportunity for growth in the home care
              market, with{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-400">
                70% of the potential market still untapped
              </span>
              .
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
