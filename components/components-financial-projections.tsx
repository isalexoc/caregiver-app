"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { DollarSign, TrendingUp, Info } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const data = [
  { quarter: "Q1 (Winter)", revenue: 90000 },
  { quarter: "Q2 (Spring)", revenue: 140000 },
  { quarter: "Q3 (Summer)", revenue: 160000 },
  { quarter: "Q4 (Fall)", revenue: 90000 },
];

const totalRevenue = data.reduce((sum, item) => sum + item.revenue, 0);

const customColors = {
  primary: "#0077B6",
  secondary: "#00B4D8",
  accent: "#90E0EF",
  background: "#CAF0F8",
  text: "#03045E",
};

export function FinancialProjections() {
  return (
    <section className="mb-12 space-y-6 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center text-blue-900">
        Financial Projections
      </h2>
      <Card className="overflow-hidden border-2 border-blue-200">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
          <CardTitle className="flex items-center gap-2 text-2xl">
            <TrendingUp className="h-8 w-8" />
            First Year Revenue Breakdown
          </CardTitle>
          <CardDescription className="text-blue-100">
            Quarterly revenue projections for our caregiving company in
            Stafford, Virginia
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <ChartContainer
            config={{
              revenue: {
                label: "Revenue",
                color: customColors.primary,
              },
            }}
            className="h-[400px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke={customColors.accent}
                />
                <XAxis dataKey="quarter" stroke={customColors.text} />
                <YAxis stroke={customColors.text} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Bar
                  dataKey="revenue"
                  fill={customColors.secondary}
                  name="Revenue"
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
        <CardFooter className="bg-blue-50">
          <Alert className="w-full border-l-4 border-blue-500">
            <Info className="h-5 w-5 text-blue-500" />
            <AlertTitle className="text-blue-700">
              Seasonal Variations
            </AlertTitle>
            <AlertDescription className="text-blue-600">
              Revenue projections vary by season due to changing demand for
              caregiving services in Stafford, VA. Summer months typically see
              higher demand due to increased travel and outdoor activities.
            </AlertDescription>
          </Alert>
        </CardFooter>
      </Card>
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-2 border-green-200">
          <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white">
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-6 w-6" />
              Total Projected Revenue
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-5xl font-bold text-green-600">${totalRevenue}</p>
            <p className="text-sm text-green-700 mt-2">
              Estimated total for Year 1
            </p>
          </CardContent>
        </Card>
        <Card className="border-2 border-purple-200">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
            <CardTitle className="flex items-center gap-2">
              <Info className="h-6 w-6" />
              Economic Factors
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-sm text-purple-700 font-medium mb-2">
              These projections are subject to change based on various economic
              factors:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-purple-600">
              <li>
                Overall economic conditions in Stafford, Virginia and
                surrounding areas
              </li>
              <li>Changes in healthcare policies and regulations</li>
              <li>Seasonal demand fluctuations in the caregiving industry</li>
              <li>Local competition and market saturation</li>
              <li>Availability of qualified caregivers in the area</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
