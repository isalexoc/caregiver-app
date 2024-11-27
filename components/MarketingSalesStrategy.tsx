"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CheckCircle,
  TrendingUp,
  Users,
  Megaphone,
  Target,
  Rocket,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const MotionCard = motion(Card);

const marketingData = [
  { name: "Brand Awareness", value: 30 },
  { name: "Lead Generation", value: 45 },
  { name: "Client Retention", value: 25 },
];

const salesProjection = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 5000 },
  { month: "Mar", sales: 6000 },
  { month: "Apr", sales: 7000 },
  { month: "May", sales: 8000 },
  { month: "Jun", sales: 10000 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export function MarketingSalesStrategy() {
  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 p-4">
      <MotionCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Marketing and Sales Strategy
          </CardTitle>
          <CardDescription className="text-xl mt-2">
            Driving Growth and Excellence in Home Care Services
          </CardDescription>
        </CardHeader>
      </MotionCard>

      <Tabs defaultValue="marketing" className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-4   h-full">
          <TabsTrigger value="marketing" className="text-lg py-3">
            Marketing Strategy
          </TabsTrigger>
          <TabsTrigger value="sales" className="text-lg py-3">
            Sales Strategy
          </TabsTrigger>
        </TabsList>

        <TabsContent value="marketing">
          <div className="grid md:grid-cols-2 gap-8">
            <MotionCard
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Target className="h-8 w-8 text-blue-600" />
                  Marketing Objectives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">
                      Establish Essential Care Services as the premier home care
                      provider in Stafford
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">
                      Increase brand visibility and recognition by 50% within
                      the first year
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">
                      Achieve a 30% market share in the Stafford home care
                      sector by year 2
                    </span>
                  </li>
                </ul>
              </CardContent>
            </MotionCard>

            <MotionCard
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Megaphone className="h-8 w-8 text-purple-600" />
                  Marketing Focus
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={marketingData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {marketingData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend verticalAlign="bottom" height={66} />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </MotionCard>
          </div>

          <MotionCard
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Rocket className="h-8 w-8 text-orange-500" />
                Innovative Marketing Tactics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-start bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-500 dark:to-purple-500  p-4 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">
                      Digital Presence Optimization
                    </h4>
                    <p>
                      Develop an intuitive, SEO-optimized website and maintain
                      active, engaging social media profiles
                    </p>
                  </div>
                </li>
                <li className="flex items-start bg-gradient-to-r from-green-50 to-teal-50  dark:from-green-500 dark:to-teal-500  p-4 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">
                      Community Partnerships
                    </h4>
                    <p>
                      Forge strategic alliances with local hospitals, clinics,
                      and senior centers for mutual referrals
                    </p>
                  </div>
                </li>
                <li className="flex items-start bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-500 dark:to-orange-500  p-4 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">
                      Educational Webinars
                    </h4>
                    <p>
                      Host online sessions on elderly care topics, positioning
                      our brand as an industry thought leader
                    </p>
                  </div>
                </li>
                <li className="flex items-start bg-gradient-to-r from-pink-50 to-red-50 dark:from-pink-500 dark:to-red-500 p-4 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">
                      Personalized Content Marketing
                    </h4>
                    <p>
                      Create and distribute tailored content addressing specific
                      needs of our target demographic
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </MotionCard>
        </TabsContent>

        <TabsContent value="sales">
          <div className="grid md:grid-cols-2 gap-8">
            <MotionCard
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Users className="h-8 w-8 text-blue-600" />
                  Sales Strategy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">
                      Offer complimentary care consultations to showcase our
                      expertise and build trust
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">
                      Implement a tiered pricing model with customizable care
                      packages
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">
                      Develop a referral program offering incentives for client
                      recommendations
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">
                      Conduct personalized follow-ups and regular care plan
                      reviews
                    </span>
                  </li>
                </ul>
              </CardContent>
            </MotionCard>

            <MotionCard
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                  Projected Sales Growth
                </CardTitle>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={salesProjection}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="sales"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </MotionCard>
          </div>

          <MotionCard
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Award className="h-8 w-8 text-yellow-500" />
                Competitive Advantages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-3 gap-4">
                <li className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-500 dark:to-blue-800 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-lg mb-2">
                    Personalized Care Plans
                  </h4>
                  <p>Tailored services meeting unique client needs</p>
                </li>
                <li className="bg-gradient-to-br from-green-100 to-green-200 dark:from-green-500 dark:to-green-800 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-lg mb-2">24/7 Support</h4>
                  <p>Round-the-clock assistance for peace of mind</p>
                </li>
                <li className="bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-500 dark:to-purple-80 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-lg mb-2">
                    Tech-Enabled Care
                  </h4>
                  <p>Innovative solutions for enhanced care delivery</p>
                </li>
              </ul>
            </CardContent>
          </MotionCard>
        </TabsContent>
      </Tabs>
    </div>
  );
}
