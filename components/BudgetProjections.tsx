"use client";
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  DollarSign,
  TrendingUp,
  PieChartIcon,
  BarChartIcon,
} from "lucide-react";

const initialCosts = [
  { name: "Registration & Licenses", value: 1000 },
  { name: "Equipment & Supplies", value: 5000 },
  { name: "Advertising & Marketing", value: 3000 },
  { name: "Insurance", value: 2000 },
  { name: "Initial Operating Costs", value: 5000 },
];

const monthlyOperatingCosts = [
  { name: "Salaries & Benefits", value: 20000 },
  { name: "Office Rent", value: 1500 },
  { name: "Utilities", value: 500 },
  { name: "Office Supplies", value: 300 },
  { name: "Transportation", value: 1200 },
  { name: "Advertising & Marketing", value: 1000 },
  { name: "Insurance", value: 800 },
  { name: "Other Operating Expenses", value: 700 },
];

const annualProjections = [
  { name: "Annual Revenue", value: 480000 },
  { name: "Annual Operating Costs", value: 312000 },
  { name: "Initial Costs", value: 16000 },
  { name: "Net Profit (Year 1)", value: 152000 },
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884D8",
  "#82ca9d",
  "#ffc658",
  "#8dd1e1",
];

export function BudgetProjections() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getOuterRadius = () => {
    if (windowSize.width < 640) return 60; // for small screens
    if (windowSize.width < 768) return 100; // for medium screens
    return 120; // for large screens
  };

  return (
    <section className="py-16   dark:from-gray-900 dark:to-gray-800 from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
          Financial Projections
        </h2>
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4  h-full">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="initial-costs">Initial Costs</TabsTrigger>
            <TabsTrigger value="monthly-costs">Monthly Costs</TabsTrigger>
            <TabsTrigger value="annual-projections">
              Annual Projections
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                  Financial Overview
                </CardTitle>
                <CardDescription>
                  Key financial metrics for Essential Care Services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {[
                    {
                      title: "Initial Investment",
                      value: "$16,000",
                      color: "text-purple-600",
                    },
                    {
                      title: "Monthly Revenue",
                      value: "$40,000",
                      color: "text-green-600",
                    },
                    {
                      title: "Monthly Costs",
                      value: "$26,000",
                      color: "text-red-600",
                    },
                    {
                      title: "Year 1 Net Profit",
                      value: "$152,000",
                      color: "text-blue-600",
                    },
                  ].map((item, index) => (
                    <Card key={index}>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          {item.title}
                        </CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className={`text-2xl font-bold ${item.color}`}>
                          {item.value}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="initial-costs">
            <Card className="w-full max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <PieChartIcon className="h-6 w-6 text-blue-600" />
                  Initial Costs Breakdown
                </CardTitle>
                <CardDescription>
                  Distribution of startup costs for Essential Care Services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={initialCosts}
                        cx="50%"
                        cy="45%"
                        outerRadius={getOuterRadius()}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ percent }) =>
                          `${(percent * 100).toFixed(0)}%`
                        }
                        labelLine={false}
                      >
                        {initialCosts.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Legend
                        layout="horizontal"
                        align="center"
                        verticalAlign="bottom"
                        wrapperStyle={{ paddingTop: "20px" }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4">
                  <p className="text-lg font-semibold text-center">
                    Total Initial Investment: $16,000
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="monthly-costs">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <BarChartIcon className="h-6 w-6 text-blue-600" />
                  Monthly Operating Costs
                </CardTitle>
                <CardDescription>
                  Breakdown of monthly expenses for Essential Care Services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={monthlyOperatingCosts}
                      layout="vertical"
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="name" type="category" hide />
                      <Tooltip />
                      <Legend
                        layout="horizontal"
                        verticalAlign="bottom"
                        align="center"
                        wrapperStyle={{ paddingTop: "20px" }}
                      />
                      <Bar dataKey="value" name="Cost ($)">
                        {monthlyOperatingCosts.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {monthlyOperatingCosts.map((cost, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{
                          backgroundColor: COLORS[index % COLORS.length],
                        }}
                      ></div>
                      <span className="flex-1">{cost.name}</span>
                      <span className="font-semibold">
                        ${cost.value.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <p className="text-lg font-semibold text-center">
                    Total Monthly Operating Costs: $26,000
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="annual-projections">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                  Annual Financial Projections
                </CardTitle>
                <CardDescription>
                  First year financial outlook for Essential Care Services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={annualProjections}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend
                        layout="horizontal"
                        verticalAlign="bottom"
                        align="center"
                        wrapperStyle={{ paddingTop: "20px" }}
                      />
                      <Bar dataKey="value" name="Amount ($)">
                        {annualProjections.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {annualProjections.map((projection, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{
                          backgroundColor: COLORS[index % COLORS.length],
                        }}
                      ></div>
                      <span className="flex-1">{projection.name}</span>
                      <span className="font-semibold">
                        ${projection.value.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-lg font-semibold">Key Metrics:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Clients per Month: 40</li>
                    <li>Average Revenue per Client: $1,000</li>
                    <li>Monthly Revenue: $40,000</li>
                    <li>Projected Net Profit (Year 1): $152,000</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
