"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, Users, TrendingUp, DollarSign, Calendar } from "lucide-react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const marketData = [
  { name: "Current 65+ Population", value: 10 },
  { name: "Projected Growth by 2050", value: 15 },
  { name: "Rest of Population", value: 75 },
];

const revenueData = [
  { quarter: "Q1", revenue: 90000 },
  { quarter: "Q2", revenue: 140000 },
  { quarter: "Q3", revenue: 160000 },
  { quarter: "Q4", revenue: 90000 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export function ElevatorPitchContent() {
  return (
    <section className="mb-12">
      <Card className="overflow-hidden">
        <CardHeader className="bg-primary dark:bg-gray-300 text-primary-foreground">
          <CardTitle className="text-2xl md:text-3xl text-white dark:text-black">
            Our Elevator Pitch
          </CardTitle>
          <CardDescription className="text-white/80 dark:text-black/80">
            A quick overview of who we are and what we do
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Users className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <p>
                  &quot;Let me ask you a question: Have you, a family member, or
                  a friend ever had to care for an elderly person or someone
                  with disabilities?&quot;
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <DollarSign className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <p>
                  &quot;Did you know that every year, the national economy loses
                  more than $20 billion due to lost work hours while we care for
                  our loved ones? Moreover, this group already represents over
                  30% of the population and continues to grow rapidly, becoming
                  a critical public health and welfare challenge.&quot;
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <TrendingUp className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <p>
                  &quot;Those who invest or work in the essential care sector
                  are guaranteed a stable and lasting return, as long as they do
                  it with excellence.&quot;
                </p>
              </div>
              <div className="h-64 w-full">
                <h3 className="text-lg font-semibold mb-2 pt-4">
                  Market Opportunity
                </h3>
                <ResponsiveContainer width="100%" height="110%">
                  <PieChart>
                    <Pie
                      data={marketData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                    >
                      {marketData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="space-y-4 mt-20 md:mt-0">
              <div className="h-64 w-full">
                <h3 className="text-lg font-semibold mb-2">
                  Projected Quarterly Revenue
                </h3>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueData}>
                    <XAxis dataKey="quarter" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="revenue" fill="#8884d8" name="Revenue ($)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="flex items-start space-x-3 pt-20">
                <Heart className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <p>
                  &quot;We are Essential Care Services LLC, a company dedicated
                  to providing comprehensive, holistic, and deeply human in-home
                  care. Our focus is to preserve the independence of elderly
                  individuals and/or people with disabilities while bringing
                  peace of mind to their families. At ECS, we strive to be
                  &apos;family caring for family.&apos;&quot;
                </p>
              </div>
              <div className="flex items-start space-x-3 pb-6">
                <Calendar className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <p>
                  &quot;Today, I want to present you with a unique opportunity
                  to invest in a sector that is constantly growing, with a
                  positive impact on our community and a promising future. Can
                  we schedule a meeting to discuss this further?&quot;
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
