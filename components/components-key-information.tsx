import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingUp, Calendar, Users } from "lucide-react";

export function KeyInformation() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Key Projections
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-col items-center justify-center space-y-0 pb-2">
            <div className="rounded-full bg-blue-200 dark:bg-blue-700 p-3 mb-2 transform transition-transform duration-300 hover:scale-110">
              <Users className="h-8 w-8 text-blue-600 dark:text-blue-200" />
            </div>
            <CardTitle className="text-sm font-medium text-blue-700 dark:text-blue-300">
              Target Clients
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-2xl font-bold text-blue-800 dark:text-blue-200">
              40
            </div>
            <p className="text-xs text-blue-600 dark:text-blue-400">
              Per month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-col items-center justify-center space-y-0 pb-2">
            <div className="rounded-full bg-green-200 dark:bg-green-700 p-3 mb-2 transform transition-transform duration-300 hover:scale-110">
              <DollarSign className="h-8 w-8 text-green-600 dark:text-green-200" />
            </div>
            <CardTitle className="text-sm font-medium text-green-700 dark:text-green-300">
              Projected Revenue
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-2xl font-bold text-green-800 dark:text-green-200">
              $480,000
            </div>
            <p className="text-xs text-green-600 dark:text-green-400">
              First year
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-col items-center justify-center space-y-0 pb-2">
            <div className="rounded-full bg-purple-200 dark:bg-purple-700 p-3 mb-2 transform transition-transform duration-300 hover:scale-110">
              <TrendingUp className="h-8 w-8 text-purple-600 dark:text-purple-200" />
            </div>
            <CardTitle className="text-sm font-medium text-purple-700 dark:text-purple-300">
              Market Growth
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-2xl font-bold text-purple-800 dark:text-purple-200">
              25%
            </div>
            <p className="text-xs text-purple-600 dark:text-purple-400">
              By 2050
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-col items-center justify-center space-y-0 pb-2">
            <div className="rounded-full bg-orange-200 dark:bg-orange-700 p-3 mb-2 transform transition-transform duration-300 hover:scale-110">
              <Calendar className="h-8 w-8 text-orange-600 dark:text-orange-200" />
            </div>
            <CardTitle className="text-sm font-medium text-orange-700 dark:text-orange-300">
              Launch Date
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-2xl font-bold text-orange-800 dark:text-orange-200">
              2024
            </div>
            <p className="text-xs text-orange-600 dark:text-orange-400">
              September 19
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
